import { yupResolver } from '@hookform/resolvers/yup';
import { type FieldValues, useForm } from 'react-hook-form';
import { getCep } from '../services/CepService';

const getCEPNumbers = (value: string): string => {
  return value?.replace('-', '').replaceAll('_', '');
};

export const useAddress = <T extends FieldValues>(schema: any) => {
  const {
    register,
    setValue,
    watch,
    handleSubmit,
    getValues,
    setFocus,
    formState: { errors },
    clearErrors,
    ...rest
  } = useForm<T>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const completeAddress = (e: any): void => {
    const { name, value } = e.target;
    if (!value) return;
    const cepDestino = getCEPNumbers(value);

    if (cepDestino.length !== 8) return;

    const tipoDot = name.indexOf('.');
    const tipo = name.slice(0, tipoDot);

    const rua = tipo.concat('.rua');
    const bairro = tipo.concat('.bairro');
    const cidade = tipo.concat('.cidade');
    const estado = tipo.concat('.estado');

    if (
      getValues(rua) ||
      getValues(bairro) ||
      getValues(cidade) ||
      getValues(estado)
    )
      return;

    getCep(cepDestino).then((res) => {
      setValue(rua, res.logradouro);
      setValue(bairro, res.bairro);
      setValue(cidade, res.localidade);
      setValue(estado, res.uf);
    });

    clearErrors([rua, bairro, cidade, estado]);
  };
  return {
    register,
    completeAddress,
    setFocus,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    rest,
  };
};
