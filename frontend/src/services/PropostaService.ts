import BaseService from "./BaseService";
import {api} from '../api/api'

class PropostaService extends BaseService {

    async registerProposta (proposta: FormData){
        const response = await this.post(proposta)
        return response
    }

    async getPropostasForPedido (queryString: any){
        const response = await api.get(this.serviceUrl +'/?' + queryString)
        return response
    }

}
