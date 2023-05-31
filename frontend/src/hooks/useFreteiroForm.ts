import { useState } from 'react';
import { type IFreteiroFormData } from '../interfaces';
import AuthService from '../services/AuthService';
import { type SubmitHandler } from 'react-hook-form';

interface Props {
  onSuccess: () => void;
}

interface IUseFreteiroForm {
  onSubmit: SubmitHandler<IFreteiroFormData>;
  error: string;
  isLoading: boolean;
}

export const useFreteiroForm = ({ onSuccess }: Props): IUseFreteiroForm => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<IFreteiroFormData> = (data) => {
    setIsLoading(true);
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

    AuthService.registerFreteiro(formData)
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
      })
      .finally(() => setIsLoading(false));
  };

  return {
    onSubmit,
    error,
    isLoading,
  };
};
