import { SpanYellow } from '../../../../styles/globalStyles';
import { ContainerForm, ContainerPrincipal, ContainerContent } from './styles';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCliente } from '../../schemas';
import { type IClienteFormData } from '../../../../interfaces';
import AuthService from '../../../../services/AuthService';
import { toast } from 'react-toastify';
import { Button, Input } from '../../../../components';
import { inputs } from './inputs';
import { RiUserAddLine } from 'react-icons/ri';

export const RegisterClienteForm = (): JSX.Element => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IClienteFormData>({
    resolver: yupResolver(schemaCliente),
  });

  const navigate = useNavigate();

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<IClienteFormData> = (data) => {
    setError('');
    setIsLoading(true);
    const { email, full_name, cpf, password } = data;
    AuthService.registerCliente({ email, full_name, cpf, password })
      .then(() => {
        toast.success('Cliente cadastrado com sucesso!');
        navigate('/login');
      })
      .catch((err) => {
        const errors = err.response.data.errors;
        if (Object.prototype.hasOwnProperty.call(errors, 'email')) {
          setError(errors.email[0]);
        } else if (Object.prototype.hasOwnProperty.call(errors, 'cpf')) {
          setError(errors.cpf[0]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie sua conta</h1>
          <div>
            {inputs.map((input, index) => (
              <Input
                key={index}
                {...register(`${input.name}`)}
                onChange={
                  input.onChange !== undefined
                    ? (e: React.ChangeEvent<HTMLInputElement>) => {
                        input.onChange(e, setValue);
                        setValue(`${input.name}`, e.target.value, {
                          shouldValidate: true,
                        });
                      }
                    : (e: React.ChangeEvent<HTMLInputElement>) => {
                        setValue(`${input.name}`, e.target.value, {
                          shouldValidate: true,
                        });
                      }
                }
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                svg={input.svg}
                error={errors[input.name]}
                required={input.required}
              />
            ))}
            {error !== '' && <p className="error-light">{error}</p>}
          </div>
          <section>
            <Button isButton Icon={RiUserAddLine} type="submit" isDisabled={isLoading}>
              Cadastre-se
            </Button>
            <p>
              Já tem uma conta?<Link to="/login"> Entrar</Link>
            </p>
          </section>
        </form>
      </ContainerForm>
      <ContainerContent>
        <div>
          <section>
            <h1>
              <Link to="/">
                Frete<SpanYellow>X</SpanYellow>
              </Link>
            </h1>

            <h2>Conta Cliente</h2>
            <p>
              Como cliente você pode cadastrar seus pedidos de frete e negociar
              diretamente com os nossos freteiros parceiros
            </p>
          </section>
        </div>
      </ContainerContent>
    </ContainerPrincipal>
  );
};
