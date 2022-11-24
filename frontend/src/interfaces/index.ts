export interface ICliente {
    email: string;
    nome: string;
    password: string;
    confirmPassword: string;
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