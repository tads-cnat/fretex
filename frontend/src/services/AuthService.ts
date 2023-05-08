import {api} from '../api/api'
import { IRegisterCliente } from '../interfaces/IRegisterCliente'

class AuthService{


    async login(data: any){
        const response = await api.post('/auth/login/', data)
        return response.data
    }

    async logout(){
        const response = await api.get('/auth/logout/')
        return response.data
    }

    async registerCliente({ full_name, email, cpf, password }: IRegisterCliente){
        const response = await api.post('/auth/register_cliente/', { full_name, cpf, email, password })
        return response.data
    }

    async registerFreteiro(data: FormData){
        const response = await api.post('/auth/register_freteiro/', data)
        return response.data
    }

    async registerPedido(data: any){
        const response = await api.post('/pedido/', data)
        return response.data
    }

    async ValidateToken(){
        const response = await api.get('/auth/user/')
        return response.data
    }
}

export default AuthService