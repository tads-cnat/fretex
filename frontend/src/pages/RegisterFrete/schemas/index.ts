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
            .number()
            .typeError("CEP inválido")
            .min(8, "CEP inválido")
            .max(8, "CEP inválido")
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
        complemento: yup
            .string()
            .required('Complemento Obrigatório'),
    }).required(),
    destino: yup.object({
        rua: yup
            .string()
            .required('Rua Obrigatória'),
        CEP: yup //verificar melhor o cep
            .number()
            .transform((value) => (isNaN(value) ? 0 : value))
            .min(8, "Mínimo de 8 números")
            .max(9, "Máximo de 8 números")
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
        complemento: yup
            .string()
            .required('Complemento Obrigatório'),
    }).required(),
    observacao: yup
        .string(),
    tipo_veiculo: yup
        .boolean()
        .typeError("Marcar pelo menos 1 veículo")
        .oneOf([true], 'Marcar pelo menos 1 veículo')
        .required('Marcar pelo menos 1 veículo'),
    nomeDestinatario: yup
        .string()
        .required('Complemento Obrigatório'),
    data_coleta: yup
        .date()
        .min(today, 'A data não pode ser no passado')
        .default(null)
        .typeError('Data inválida')
        .required('Data de coleta Obrigatório'),
    data_entrega: yup
        .date()
        .default(null)
        .typeError("Data inválida")
        .required('Data de entrega Obrigatório')
        .min(
            yup.ref('data_coleta'),
            "Data entrega tem que ser amior ou igual que data de coleta"
        )
        .min(today, 'A data não pode ser no passado'),
    turno_entrega: yup
        .string()
        .required('Turno de entrega obrigatório'),
    turno_coleta: yup
        .string()
        .required('Turno de coleta Obrigatório'),
})
