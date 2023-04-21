import { type IPedido, type IVeiculo } from "../interfaces"
import { type IRegisterCliente } from "../interfaces/IRegisterCliente"
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
  registerCliente: async ({ full_name, email, cpf, password }: IRegisterCliente) => {
    const response = await api.post('/auth/register_cliente/', { full_name, cpf, email, password })
    return response.data
  },
  registerFreteiro: async (data: FormData) => {
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
        "Authorization": `Token ${localStorage.getItem("authToken")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    return response.data
  },
  registerProposta: async (formData: FormData) => {
    const response = await api.post('/proposta/', formData, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    return response.data
  },
  registerVeiculo: async (veiculo: IVeiculo) => {
    await api.post('/veiculo/', veiculo, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`
      }
    })
  },
  getVeiculosForFreteiro: async (id: number) => {
    const response = await api.get(`/veiculo/?freteiro=${id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`
      }
    })
    return response.data
  },
  getVeiculo: async (id: number) => {
    const response = await api.get(`/veiculo/${id}`, {
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
  getVeiculoForId: async (id: number) => {
    const response = await api.get(`/tipodeveiculo/?id=${id}`, {
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
  getPropostas: async () => {
    const response = await api.get('/proposta/', {
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
  getPropostasForPedido: async (queryString: any) => {
    const response = await api.get(`/proposta/?${queryString}`, {
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
  getTypeUser: async (id: number) => {
    const response = await api.get(`usuarios/${id}/`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`
      }
    })
    return response.data
  },
  updateFreteiro: async (id: number, data: FormData) => {
    const response = await api.patch(`/freteiro/${id}/`, data, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    return response.data
  },
  updatePedido: async (id: number, data: FormData) => {
    const response = await api.patch(`/pedido/${id}/`, data, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    return response.data
  },
  updateProposta: async (id: number, data: FormData) => {
    const response = await api.patch(`/proposta/${id}/`, data, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    return response.data
  },
  updateCliente: async (id: number, data: FormData) => {
    const response = await api.patch(`/cliente/${id}/`, data, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`,
        'Content-Type': 'multipart/form-data',
      }
    })
    return response.data
  },
  getCEP: async (cep: string) => {
    const response = await cepApi.get(`/${cep}/json/`)
    return response.data
  },
  deletePedido: async (id: number) => {
    const response = await api.delete(`/pedido/${id}/`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("authToken")}`
      }
    })
    return response.data
  }
})

export default useApi
