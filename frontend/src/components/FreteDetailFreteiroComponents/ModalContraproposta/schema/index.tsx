import * as yup from "yup";

export const schemaContraproposta = yup.object({
  valor: yup
    .number()
    .transform((value) => (isNaN(value) ? null : value))
    .nullable()
    .required("Valor Obrigatório"),
});
