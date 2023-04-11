import { useState } from 'react';
import { type IFreteiroFormData } from '../interfaces';
import useApi from './useApi';
import { type SubmitHandler } from 'react-hook-form';

interface Props {
  onSuccess: () => void;
}

interface IUseFreteiroForm {
  onSubmit: SubmitHandler<IFreteiroFormData>;
  error: string;
}

export const useFreteiroForm = ({ onSuccess }: Props): IUseFreteiroForm => {
  const { registerFreteiro } = useApi();
  const [error, setError] = useState('');

  const onSubmit: SubmitHandler<IFreteiroFormData> = (data) => {
    if (data.url_foto.length === 0) {
      setError('Imagem obrigatória!');
      return;
    }
    const formData = new FormData();
    const { endereco, ...freteiro } = data;

    Object.entries(freteiro).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });
    Object.entries(endereco).forEach(([key, value]) => {
      if (value) formData.append(`endereco.${key}`, String(value));
    });

    registerFreteiro(formData)
      .then(onSuccess)
      .catch((err) => {
        const errors = err.response.data.errors;
        if (Object.prototype.hasOwnProperty.call(errors, 'email')) {
          setError(errors.email[0]);
        } else if (Object.prototype.hasOwnProperty.call(errors, 'cpf')) {
          setError(errors.cpf[0]);
        } else if (Object.prototype.hasOwnProperty.call(errors, 'url_foto')) {
          setError(errors.url_foto[0]);
        }
      });
  };

  return {
    onSubmit,
    error,
  };
};
