import * as yup from "yup";
import { string } from "yup/lib/locale";

export const schemaPedido = yup.object({
    produto: yup.object({
        nome: yup
            .string()
    }),
    origem: yup.object({
        rua: yup
            .string()
            .required('Email Obrigatório'),
        CEP: yup
            .string()
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .required('Numero Obrigatório'),
        bairro: yup
            .string()
            .required('Bairro Obrigatório'),
        cidade: yup
            .string()
            .required('Cidade Obrigatório'),
        estado: yup
            .string()
            .required('Estado Obrigatório'),
        complemento: yup
            .string()
            .required('Complemento Obrigatório'),
    }).required(),
    destino: yup.object({
        rua: yup
            .string()
            .required('Email Obrigatório'),
        CEP: yup
            .string()
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .required('Numero Obrigatório'),
        bairro: yup
            .string()
            .required('Bairro Obrigatório'),
        cidade: yup
            .string()
            .required('Cidade Obrigatório'),
        estado: yup
            .string()
            .required('Estado Obrigatório'),
        complemento: yup
            .string()
            .required('Complemento Obrigatório'),
    }).required(),
    /*tipo_veiculo: yup,*/
    observacao: yup
        .string(),
    nomeDestinatario: yup
        .string()
        .required('Complemento Obrigatório'),
    data_coleta: yup
        .string()
        .required('Data de coleta Obrigatório'),
    data_entrega: yup
        .string()
        .required('Data de entrega Obrigatório'),
    turno_entrega: yup
        .string()
        .required('Turno de entrega Obrigatório'),
    turno_coleta: yup
        .string()
        .required('Turno de coleta Obrigatório'),
})
