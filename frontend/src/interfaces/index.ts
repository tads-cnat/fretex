export interface ICliente {
    email: string;
    username: string;
    cpf: string;
    password: string;
    confirmPassword?: string;
}

export interface IFreteiro {
    email: string;
    nome: string;
    password: string;
    confirmPassword: string;
    endereco: {
        cep: string;
        rua: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
        complemento?: string;
    }
}

export interface IPedido {
    cliente: string,
    produto: {
        nome: string
    },
    origem: {
        rua: string,
        CEP: string,
        numero: string,
        bairro: string,
        cidade: string,
        estado: string,
        complemento: string
    },
    destino: {
        rua: string,
        CEP: string,
        numero: string,
        bairro: string,
        cidade: string,
        estado: string,
        complemento: string
    },
    status: string,
    tipo_veiculo: number[],
    observacao: string,
    nomeDestinatario: string,
    data_coleta: string,
    data_entrega: string,
    turno_entrega: string,
    turno_coleta: string
}