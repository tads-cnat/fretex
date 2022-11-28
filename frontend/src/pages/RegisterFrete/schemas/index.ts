import * as yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0)

export const schemaPedido = yup.object({
    produto: yup.object({
        nome: yup
            .string()
    }),
    origem: yup.object({
        rua: yup
            .string()
            .required('Rua Obrigatória'),
        CEP: yup //verificar melhor o cep
            .string()
          
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .transform((value) => (isNaN(value) ? 0 : value))
            .min(2, 'Mínimo de 2 números')
            .required('Numero Obrigatório'),
        bairro: yup
            .string()
            .required('Bairro Obrigatório'),
        cidade: yup
            .string()
            .required('Cidade Obrigatória'),
        estado: yup
            .string()
            .required('Estado Obrigatório'),
    }).required(),
    destino: yup.object({
        rua: yup
            .string()
            .required('Rua Obrigatória'),
        CEP: yup //verificar melhor o cep
            .string()
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .transform((value) => (isNaN(value) ? 0 : value))
            .min(2, 'Mínimo de 2 números')
            .required('Numero Obrigatório'),
        bairro: yup
            .string()
            .required('Bairro Obrigatório'),
        cidade: yup
            .string()
            .required('Cidade Obrigatória'),
        estado: yup
            .string()
            .required('Estado Obrigatório'),
    }).required(),
    observacao: yup
        .string()
        .required(),
    nomeDestinatario: yup
        .string()
        .required('Complemento Obrigatório'),
    data_coleta: yup
        .string()
        .required('Data de coleta Obrigatório'),
    data_entrega: yup
        .string()
        .required(),
    turno_entrega: yup
        .string()
        .required('Turno de entrega obrigatório'),
    turno_coleta: yup
        .string()
        .required('Turno de coleta Obrigatório'),
})
