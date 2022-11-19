import * as yup from "yup";

export const schemaCliente = yup.object({
    email: yup
        .string()
        .email("Email inválido")
        .required('Email Obrigatório'),
    nome: yup
        .string()
        .required('Nome Obrigatório'),
    password: yup
        .string()
        .min(5, 'Mínimo de 5 caracteres')
        .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/,'Sua senha deve conter letras e números')
        .required('Senha Obrigatória'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Senhas diferentes')
        .required('Confirme sua senha')
}).required();

