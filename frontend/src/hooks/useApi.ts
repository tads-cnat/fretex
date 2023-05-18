import { type IPedido, type IVeiculo } from "../interfaces"
import { type IRegisterCliente } from "../interfaces/IRegisterCliente"
import { api } from "../api/api"


// GET com ou sem Slash
// POST APENAS COM SLASH

export const useApi = () => ({
  signin: async (email: string, password: string) => {
    const response = await api.post('/auth/login/', { email, password });
    return response.data;
  },
  logout: async () => {
    const response = await api.get('/auth/logout/');
    return response.data;
  },
  registerCliente: async ({
    full_name,
    email,
    cpf,
    password,
  }: IRegisterCliente) => {
    const response = await api.post('/auth/register_cliente/', {
      full_name,
      cpf,
      email,
      password,
    });
    return response.data;
  },
  registerFreteiro: async (data: FormData) => {
    const response = await api.post('/auth/register_freteiro/', data);
    return response;
  },
  registerPedido: async (pedido: IPedido) => {
    const response = await api.post('/pedido/', pedido);
    return response.data;
  },
  registerProposta: async (formData: FormData) => {
    const response = await api.post('/proposta/', formData);
    return response.data;
  },
  registerVeiculo: async (veiculo: IVeiculo) => {
    await api.post('/veiculo/', veiculo);
  },
  getVeiculosForFreteiro: async (id: number) => {
    const response = await api.get(`/veiculo/?freteiro=${id}`);
    return response.data;
  },
  getVeiculo: async (id: number) => {
    const response = await api.get(`/veiculo/${id}`);
    return response.data;
  },
  validateToken: async (token: string) => {
    const response = await api.get('/auth/user/');
    return response.data;
  },
  tiposVeiculo: async () => {
    const response = await api.get('/tipodeveiculo/');
    return response.data;
  },
  getVeiculoForId: async (id: number) => {
    const response = await api.get(`/tipodeveiculo/?id=${id}`);
    return response.data;
  },
  getPedidos: async () => {
    const response = await api.get('/pedido/');
    return response.data;
  },
  getPropostas: async () => {
    const response = await api.get('/proposta/');
    return response.data;
  },
  getSearchPedidos: async (queryString: any) => {
    const response = await api.get(`/pedido/?${queryString}`);
    return response.data;
  },
  getPropostasForPedido: async (queryString: any) => {
    const response = await api.get(`/proposta/?${queryString}`);
    return response.data;
  },
  getPedido: async (id: number) => {
    const response = await api.get(`/pedido/${id}`);
    return response.data;
  },
  getCliente: async (id: number | undefined) => {
    const response = await api.get(`/cliente/${id}/`);
    return response.data;
  },
  getFreteiro: async (id: number | undefined) => {
    const response = await api.get(`/freteiro/${id}/`);
    return response.data;
  },
  getUser: async () => {
    const response = await api.get(`/auth/user/`);
    return response.data;
  },
  getTypeUser: async (id: number) => {
    const response = await api.get(`usuarios/${id}/`);
    return response.data;
  },
  updateFreteiro: async (id: number, data: FormData) => {
    const response = await api.patch(`/freteiro/${id}/`, data);
    return response.data;
  },
  updatePedido: async (id: number, data: FormData) => {
    const response = await api.patch(`/pedido/${id}/`, data);
    return response.data;
  },
  updateProposta: async (id: number, data: FormData) => {
    const response = await api.patch(`/proposta/${id}/`, data);
    return response.data;
  },
  updateCliente: async (id: number, data: FormData) => {
    const response = await api.patch(`/cliente/${id}/`, data);
    return response.data;
  },
  deletePedido: async (id: number) => {
    const response = await api.delete(`/pedido/${id}/`);
    return response.data;
  },
});

export default useApi;
