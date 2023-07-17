export interface IUserFormData {
  email : string;
};
export interface IClienteFormData {
  url_foto?: any;
  capa_foto?: any;
  email: string;
  full_name: string;
  cpf: string;
  password: string;
  confirmPassword?: string;
}

export interface IFreteiroFormData {
  url_foto: any;
  capa_foto?: any;
  email: string;
  full_name: string;
  cpf: string;
  password: string;
  confirmPassword?: string;
  endereco: IEndereco;
}

export interface IfreteiroRegData{
  url_foto: any;
  capa_foto?: any;
  email: string;
  full_name: string;
  cpf: string;
  password: string;
  confirmPassword?: string;
}

export interface IUserUpdateFormData {
  url_foto?: any;
  capa_foto?: any;
  email?: string;
  full_name?: string;
  cpf?: string;
  password?: string;
  confirmPassword?: string;
  endereco: IEndereco;
}

export interface IVeiculo {
  id: number;
  url_foto: any;
  placa: string;
  cor: string;
  marca: string;
  modelo: string;
  ano: string;
  freteiro: string;
  tipo_veiculo: number;
}

export interface IFreteiroFormDataUpdate {
  url_foto: any;
  capa_foto?: any;
  email: string;
  first_name: string;
  username: string;
  last_name?: string;
  cpf: string;
  password: string;
  confirmPassword?: string;
  endereco: IEndereco;
}

export interface ICliente {
  id: number;
  url_foto?: any;
  capa_foto?: any;
  email: string;
  first_name: string;
  last_name?: string;
  username: string;
  cpf: string;
  password: string;
  confirmPassword?: string;
}

export interface IFreteiro extends ICliente {
  endereco: IEndereco;
}

export interface IEndereco {
  CEP: string;
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
  estado: string;
  complemento?: string;
}

export interface IPedido {
  id: number;
  cliente: number;
  cliente_first_name: string;
  cliente_last_name?: string;
  produto: {
    nome: string;
    imagem_url: any;
  };
  origem: IEndereco;
  destino: IEndereco;
  status: string;
  tipo_veiculo: number[];
  observacao: string;
  nomeDestinatario: string;
  data_coleta: string;
  data_entrega: string;
  turno_entrega: string;
  turno_coleta: string;
  criado_em: string;
}

export interface IProposta {
  id: number;
  valor: number;
  eh_aceita: boolean;
  ehNegada: boolean;
  data_criacao: string;
  is_contraproposta: boolean;
  is_esperandoCliente: boolean;
  is_esperandoFreteiro: boolean;
  usuario: number;
  pedido: number;
  veiculo: number;
  contraproposta: null | number;
}

export interface IFormDataProposta {
  valor: number;
  eh_aceita: boolean;
  ehNegada: boolean;
  usuario: number;
  is_esperandoCliente: boolean;
  pedido: number;
  veiculo: number;
  contraproposta: null | number;
}

export interface IPedidoFormData {
  produto: {
    nome: string;
    imagem_url: FileList;
  };
  origem: IEndereco;
  destino: IEndereco;
  status?: string;
  tipo_veiculo: number[];
  observacao?: string;
  nomeDestinatario: string;
  data_coleta: string;
  data_entrega: string;
  turno_entrega: string;
  turno_coleta: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface ITypeUser {
  data: {
    id: number;
    username: string;
    first_name: string;
    email: string;
    last_name: string;
    extra_data: {
      freteiro: number | null;
      cliente: number | null;
    };
  };
  metadata: any;
  success: boolean;
  errors: any;
}
