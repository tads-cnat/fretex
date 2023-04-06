import * as yup from "yup";

export const schemaCliente = yup.object({
    email: yup
        .string()
        .email("Email inválido")
        .required('Email Obrigatório'),
    full_name: yup
        .string()
        .required('Nome Obrigatório'),
    cpf: yup
        .string()
        .matches(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$/, 'CPF deve conter apenas números')
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
  /*  url_foto: yup.object().shape({
        picture: yup.mixed()
          .test('required', "You need to provide a file", (value) =>{
            return value && value.length
          } )
          .test("fileSize", "The file is too large", (value, context) => {
            return value && value[0] && value[0].size <= 200000;
          })
          .test("type", "We only support jpeg", function (value) {
            return value && value[0] && value[0].type === "image/jpeg";
          }),
        }), */
    email: yup
        .string()
        .email("Email inválido")
        .required('Email Obrigatório'),
    full_name: yup
        .string()
        .required('Nome Obrigatório'),
    cpf: yup
        .string()
        .matches(/([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})$/, 'CPF deve conter apenas números')
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
            .required('Rua Obrigatória'),
        CEP: yup
            .string()
            .max(9, 'CEP inválido')
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .transform((value) => (isNaN(value) ? 0 : value))
            .min(1, "mínimo de um números")
            .required('Numero Obrigatório'),
        bairro: yup
            .string()
            .required('Bairro Obrigatório'),
        cidade: yup
            .string()
            .required('Cidade Obrigatório'),
        estado: yup
            .string()
            .min(2, 'Digite a sigla do estado')
            .max(2, 'Digite apenas a sigla do estado')
            .required('Estado Obrigatório'),
        complemento: yup
            .string()
            .nullable(),
    }).required(),
}).required();