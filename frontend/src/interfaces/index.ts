export interface ICliente {
    url_foto?: any;
    email: string;
    username: string;
    cpf: string;
    password: string;
    confirmPassword?: string;
}

export interface IFreteiro {
    url_foto?: string;
    email: string;
    username: string;
    cpf: string;
    password: string;
    confirmPassword?: string;
    endereco: {
        CEP: string;
        rua: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
        complemento?: string;
    }
}

export interface IPedido {
    id?: number,
    cliente?: number,
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
        complemento?: string
    },
    destino: {
        rua: string,
        CEP: string,
        numero: string,
        bairro: string,
        cidade: string,
        estado: string,
        complemento?: string
    },
    // status: string,
    tipo_veiculo: number[],
    observacao: string,
    nomeDestinatario: string,
    data_coleta: string,
    data_entrega: string,
    turno_entrega: string,
    turno_coleta: string
}

export interface ILogin {
    email: string;
    password: string;
}