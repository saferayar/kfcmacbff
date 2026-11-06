import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PedidosController } from './pedidos/pedidos.controller';
import { PedidosService } from './pedidos/pedidos.service';

@Module({
  imports: [],
  controllers: [AppController, PedidosController],
  providers: [AppService, PedidosService],
})
export class AppModule {}
