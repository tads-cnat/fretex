import { type IPedido } from "../interfaces";
import BaseService from "./BaseService";
import {api} from '../api/api';

class PedidoService extends BaseService{

    async registerPedido(pedido: IPedido){
        const response = await this.post(pedido);
        return response;
    };

    async getSearchPedidos (queryString: any){
        const response = await api.get(this.serviceUrl + '/?' + queryString);
        return response.data;
    };

};

export default new PedidoService('/pedido');
 
