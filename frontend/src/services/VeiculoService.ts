import BaseService from "./BaseService";

import {api} from '../api/api'
import { IVeiculo } from "../interfaces";

class VeiculoService extends BaseService {

    async registerVeiculo (veiculo: IVeiculo){
        const response = await this.post(veiculo)
        return response
    }

    async getVeiculosForFreteiro (id: number){
        const response = await api.get(this.serviceUrl + '/?freteiro=' + id)
        return response.data
    }

}

export default new VeiculoService('/veiculo')