import * as yup from "yup";

export const schemaLogin = yup.object({
    email: yup
        .string()
        .email("Email inválido")
        .required('Email Obrigatório'),
    password: yup
        .string()
        .min(5, 'Mínimo de 5 caracteres')
        .required('Nome Obrigatório'),
})