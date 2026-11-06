# syntax=docker/dockerfile:1

# Etapa 1: Construcción (Builder)
FROM node:22-alpine AS builder

WORKDIR /usr/src/app

# Copiar definición de dependencias
COPY package*.json ./

# Instalar dependencias completas para la compilación
RUN npm ci

# Copiar el resto del código fuente del proyecto
COPY . .

# Compilar la aplicación NestJS
RUN npm run build

# Eliminar dependencias de desarrollo para aligerar la imagen final
RUN npm prune --omit=dev

# Etapa 2: Entorno de ejecución (Runtime)
FROM node:22-alpine AS runner

WORKDIR /usr/src/app

ENV NODE_ENV=production
ENV PORT=3000

# Ejecutar con usuario no root por seguridad
USER node

# Copiar solo dependencias de producción y código transpilado
COPY --chown=node:node --from=builder /usr/src/app/package*.json ./
COPY --chown=node:node --from=builder /usr/src/app/node_modules ./node_modules
COPY --chown=node:node --from=builder /usr/src/app/dist ./dist

# Puerto expuesto por defecto
EXPOSE 3000

# Comando para iniciar la aplicación en producción
CMD ["node", "dist/main.js"]
