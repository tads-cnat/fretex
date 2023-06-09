import * as yup from "yup";

export const schemaProposta = yup.object({
  veiculo: yup.number().nullable().required("Escolha seu veículo"),

  valor: yup
    .number()
    .transform((value) => (isNaN(value) ? null : value))
    .nullable()
    .required("Valor Obrigatório"),
});
