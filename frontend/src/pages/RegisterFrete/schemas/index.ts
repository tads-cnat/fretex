import * as yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0)

export const schemaPedido = yup.object({
    produto: yup.object({
        nome: yup
            .string()
            .required("Campo Obrigatório")
    }),
    origem: yup.object({
        rua: yup
            .string()
            .required('Rua Obrigatória'),
        CEP: yup //verificar melhor o cep
            .string()
            .transform((value) => (value.replaceAll("_", "").replace("-", "")))
            .min(8, "CEP inválido")
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .transform((value) => (isNaN(value) ? 0 : value))
            .min(2, 'Mínimo de 1 números')
            .required('Numero Obrigatório'),
        bairro: yup
            .string()
            .required('Bairro Obrigatório'),
        cidade: yup
            .string()
            .required('Cidade Obrigatória'),
        estado: yup
            .string()
            .max(2, "No máximo 2 letras")
            .required('Estado Obrigatório'),
    }).required(),
    destino: yup.object({
        rua: yup
            .string()
            .required('Rua Obrigatória'),
        CEP: yup //verificar melhor o cep
            .string()
            .transform((value) => (value.replaceAll("_", "").replace("-", "")))
            //   .oneOf([yup.ref('origem.CEP'), ], "Os CEPs não devem ser iguais")
            .min(8, "CEP inválido")
            .required('CEP Obrigatório'),
        numero: yup
            .number()
            .transform((value) => (isNaN(value) ? 0 : value))
            .min(2, 'Mínimo de 1 número')
            .required('Numero Obrigatório'),
        bairro: yup
            .string()
            .required('Bairro Obrigatório'),
        cidade: yup
            .string()
            .required('Cidade Obrigatória'),
        estado: yup
            .string()
            .max(2, "No máximo 2 letras")
            .required('Estado Obrigatório'),
    }).required(),
    tipo_veiculo: yup
        .array()
        .nullable()
        .min(1, "Escolha pelo menos 1 veículo")
        .required("Escolha pelo menos 1 veículo"),
    nomeDestinatario: yup
        .string()
        .required('Campo Obrigatório'),
    data_coleta: yup
        .string()
        .nullable()
        .required('Data de coleta Obrigatório'),
    data_entrega: yup
        .string()
        .nullable()
        .required('Data de entrega Obrigatório'),
    turno_entrega: yup
        .string()
        .required('Turno de entrega obrigatório'),
    turno_coleta: yup
        .string()
        .required('Turno de coleta Obrigatório'),
})
