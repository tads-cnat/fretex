import { ICliente, IFreteiro } from "../interfaces"
import { api } from "../services/api"

/*const Headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Access-Control-Allow-Origin': 'true',
    'Access-Control-Allow-Methods': 'GET, PUT, PATCH, POST, DELETE'
}*/

// GET com ou sem Slash
// POST APENAS COM SLASH

export const useApi = () => ({
    signin: async (email: string, password: string) => {
        const response = await api.post('/auth/login/', { email, password })
        return response.data
    },
    registerCliente: async ({ username, email, cpf, password }: ICliente) => {
        const response = await api.post('/cliente/', { username, cpf, email, password })
        return response.data
    },
    registerFreteiro: async ({ username, email, cpf, password, endereco }: IFreteiro) => {
        const response = await api.post('/freteiro/', { username, email, cpf, password, endereco })
        return response.data
    }

})

export default useApi