import { SpanYellow } from '../../../styles/globalStyles';
import Email from '../../../assets/Svg/Email';
import Password from '../../../assets/Svg/Password';
import User from '../../../assets/Svg/User';
import { ContainerForm, ContainerPrincipal, ContainerContent } from './styles';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCliente } from '../../../pages/ResgisterUser/schemas';
import { type IClienteFormData } from '../../../interfaces';
import useApi from '../../../hooks/useApi';
import { toast } from 'react-toastify';
import Button from '../../Global/Button';
import { Input } from '../../Input';

const RegisterClientForm = (): JSX.Element => {
  const [error, setError] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IClienteFormData>({
    mode: 'onChange',
    resolver: yupResolver(schemaCliente),
  });

  const { registerCliente } = useApi();
  const navigate = useNavigate();

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<IClienteFormData> = (data) => {
    setError('');
    const { email, full_name, cpf, password } = data;
    registerCliente({ email, full_name, cpf, password })
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
      });
  };

  const inputs = [
    {
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Seu email',
      required: true,
      svg: <Email />,
    },
    {
      type: 'text',
      name: 'full_name',
      label: 'Nome completo',
      placeholder: 'Seu nome completo',
      required: true,
      svg: <User />,
    },
    {
      type: 'text',
      name: 'cpf',
      label: 'CPF',
      placeholder: 'Seu CPF',
      required: true,
      svg: <User />,
    },

    {
      type: 'password',
      name: 'password',
      label: 'Senha',
      placeholder: 'Sua senha',
      required: true,
      svg: <Password />,
    },

    {
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirmação da senha',
      placeholder: 'Confirme sua senha',
      required: true,
      svg: <Password />,
    },
  ];

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
                type={input.type}
                label={input.label}
                placeholder={input.placeholder}
                svg={input.svg}
                error={errors[input.name]}
                required={input.required}
              />
            ))}

            {error !== '' && <p className="error">{error}</p>}
          </div>
          <section>
            <Button isButton type="submit">
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

export default RegisterClientForm;
