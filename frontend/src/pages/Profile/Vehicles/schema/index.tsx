import * as yup from 'yup';

export const schemaVeiculo = yup.object({
  marca: yup.string().required('Marca do veículo Obrigatória'),
  modelo: yup.string().required('Modelo do veículo Obrigatório'),
  ano: yup
    .string()
    .max(4, 'Ano do veículo inválido')
    .min(4, 'Ano do veículo inválido')
    .matches(/^[0-9]+$/, 'Ano do veículo inválido')
    .required('Ano do veículo Obrigatório'),
  placa: yup
    .string()
    .min(7, 'Placa do veículo inválida')
    .max(7, 'Placa do veículo inválida')
    .matches(/^[A-Z]{3}[0-9][0-9A-Z][0-9]{2}/, 'Placa do veículo inválida')
    .required('Placa do veículo Obrigatória'),
  cor: yup
    .string()
    .matches(/^[a-zA-Z]+$/, 'Cor do veículo inválida')
    .required('Cor do veículo Obrigatória'),
  tipo_veiculo: yup
    .number()
    .nullable()
    .min(1, 'Escolha pelo menos 1 veículo')
    .required('Escolha pelo menos 1 veículo'),
  url_foto: yup
    .mixed()
    .test('fileSize', 'Adicione uma imagem', (value) => value.length > 0),
});
