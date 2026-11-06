import { Injectable } from '@nestjs/common';
import { PedidoApi } from '../dto/pedido-api';
import axios from 'axios';

@Injectable()
export class PedidosService {

    async getPedidos(): Promise<PedidoApi[]>{
        try{
            
            const pedidosApi = await axios
                .get<PedidoApi[]>("http://localhost:3001/api/pedidos");
            return pedidosApi.data;

        }catch(ex){
            return [];
        }
    }
}
