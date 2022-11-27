import * as yup from "yup";

export const schemaCliente = yup.object({
    email: yup
        .string()
        .email("Email inválido")
        .required('Email Obrigatório'),
    username: yup
        .string()
        .required('Nome Obrigatório'),
    cpf: yup
        .string()
        .matches(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/, 'CPF deve conter apenas números')
        .min(14, 'CPF deve ter no mínimo 11 caracteres')
        .max(14, 'CPF deve ter no máximo 11 caracteres'),
    password: yup
        .string()
        .min(5, 'Mínimo de 5 caracteres')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, 'Sua senha deve conter letras e números')
        .required('Senha Obrigatória'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Senhas diferentes')
        .required('Confirme sua senha')
}).required();

export const schemaFreteiro = yup.object({
    email: yup
        .string()
        .email("Email inválido")
        .required('Email Obrigatório'),
    username: yup
        .string()
        .required('Nome Obrigatório'),
    cpf: yup
        .string()
        .matches(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})$/, 'CPF deve conter apenas números')
        .min(14, 'CPF deve ter no mínimo 11 caracteres')
        .max(14, 'CPF deve ter no máximo 11 caracteres'),
    password: yup
        .string()
        .min(5, 'Mínimo de 5 caracteres')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, 'Sua senha deve conter letras e números')
        .required('Senha Obrigatória'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Senhas diferentes')
        .required('Confirme sua senha'),
    endereco: yup.object({
        rua: yup
            .string()
            .required('Email Obrigatório'),
        CEP: yup
            .string()
            .max(9, 'CEP inválido')
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .transform((value) => (isNaN(value) ? 0 : value))
            .min(2, "mínimo de dois números")
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
            .string(),
    }).required(),
}).required();