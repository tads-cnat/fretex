import * as yup from "yup";

export const schemaVeiculo = yup.object({
    marca: yup
        .string()
        .required('Marca do veículo Obrigatória'),
    modelo: yup
        .string()
        .required('Modelo do veículo Obrigatório'),
    ano: yup
        .string()
        .required('Ano do veículo Obrigatório'),
    placa: yup
        .string()
        .required('Placa do veículo Obrigatória'),
    cor: yup
        .string()
        .required('Cor do veículo Obrigatória'),
    tipo_veiculo: yup
        .number()
        .nullable()
        .min(1, "Escolha pelo menos 1 veículo")
        .required("Escolha pelo menos 1 veículo"),
})