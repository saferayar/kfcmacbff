import { Pedido } from "../dto/pedido";
import { PedidoApi } from "../dto/pedido-api";

export class PedidosMapper {

    public toPedido(pedidoApi:PedidoApi): Pedido{

        const pedido = new Pedido();
        pedido.nombreCliente = pedidoApi?.nombreCliente;
        pedido.tipo = pedidoApi?.tipoPedido?.toLowerCase();
        pedido.total = pedidoApi?.total;
        pedido.medioPago = pedidoApi?.medioPago;

        return pedido;
    }

}
