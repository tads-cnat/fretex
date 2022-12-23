import { ICliente, IPedido } from "../interfaces"
import { api, cepApi } from "../services/api"

// GET com ou sem Slash
// POST APENAS COM SLASH

export const useApi = () => ({
    signin: async (email: string, password: string) => {
        const response = await api.post('/auth/login/', { email, password })
        return response.data
    },
    logout: async () => {
        const response = await api.get('/auth/logout/', {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    registerCliente: async ({ username, email, cpf, password }: ICliente) => {
        const response = await api.post('/auth/register_cliente/', { username, cpf, email, password })
        return response.data
    },
    registerFreteiro: async (data: any) => {
        const response = await api.post('/auth/register_freteiro/', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
        return response
    },
    registerPedido: async (pedido: IPedido) => {
        const response = await api.post('/pedido/', pedido, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    validateToken: async (token: string) => {
        const response = await api.get('/auth/user/', {
            headers: {
                "Authorization": `Token ${token}`
            }
        })
        return response.data
    },
    tiposVeiculo: async () => {
        const response = await api.get('/tipodeveiculo/', {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    getPedidos: async () => {
        const response = await api.get('/pedido/', {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    getSearchPedidos: async (queryString: any) => {
        const response = await api.get(`/pedido/?${queryString}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    getPedido: async (id: number) => {
        const response = await api.get(`/pedido/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    getCliente: async (id: number | undefined) => {
        const response = await api.get(`/cliente/${id}/`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    getFreteiro: async (id: number | undefined) => {
        const response = await api.get(`/freteiro/${id}/`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    getUser: async () => {
        const response = await api.get(`/auth/user/`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("authToken")}`
            }
        })
        return response.data
    },
    getCEP: async (cep: string) => {
        const response = await cepApi.get(`/${cep}/json/`)
        return response.data
    }
})

export default useApi