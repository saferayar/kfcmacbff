import { Controller, Get, Post } from '@nestjs/common';
import { Pedido } from '../dto/pedido';
import { PedidosService } from './pedidos.service';
import { PedidosMapper } from '../utils/pedidos-mapper';

@Controller('pedidos')
export class PedidosController {

    constructor(private readonly pedidosService: PedidosService){

    }

    @Get("/")
    async getPedidos():Promise<Pedido[]> {
        //TODO: Retornar lo que devuelve pedidos service
        const pedidosApi = await this.pedidosService.getPedidos();
        const mapper = new PedidosMapper();
        const pedidos = pedidosApi.map((pa)=>mapper.toPedido(pa));

        return pedidos;
     }

    @Post("/")
    createPedido(pedido: Pedido): void {

    }


}
