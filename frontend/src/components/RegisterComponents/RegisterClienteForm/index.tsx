import { SpanYellow } from '../../../styles';
import Email from '../../../assets/Svg/Email';
import Password from '../../../assets/Svg/Password';
import User from '../../../assets/Svg/User';
import {
  ContainerForm,
  BtnYellow,
  ContainerPrincipal,
  ContainerContent,
} from './styles';
import Eye from '../../../assets/Svg/Eye';
import { useEffect, useState } from 'react';
import ClosedEye from '../../../assets/Svg/ClosedEye';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaCliente } from '../../../pages/ResgisterUser/schemas';
import { type IClienteFormData } from '../../../interfaces';
import useApi from '../../../hooks/useApi';
import { useToggle } from '../../../hooks/useToggle';
import { toast } from 'react-toastify';
import { IRegisterCliente } from '../../../interfaces/IRegisterCliente';

const RegisterClientForm = (): JSX.Element => {
  const { value: password, toggle: togglePassword } = useToggle();
  const { value: confirmPassword, toggle: toggleConfirmPassword } = useToggle();
  const [error, setError] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<IClienteFormData>({
    resolver: yupResolver(schemaCliente),
  });

  const { registerCliente } = useApi();
  const navigate = useNavigate();

  const handlePassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    togglePassword();
  };

  const handleConfirmPassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    toggleConfirmPassword();
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<IClienteFormData> = (data) => {
    setError('');
    const cliente: IRegisterCliente = {
      email: data.email,
      fullName: data.full_name,
      cpf: data.cpf,
      password: data.password,
    };
    registerCliente(cliente)
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

  return (
    <ContainerPrincipal>
      <ContainerForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie sua conta</h1>
          <div>
            <label>
              <Email />
              <input
                {...register('email')}
                type="email"
                autoComplete="on"
                placeholder="Seu E-mail"
              />
            </label>
            {errors.email != null && (
              <p className="error">{errors.email?.message}</p>
            )}
            <label>
              <User />
              <input
                {...register('full_name')}
                type="text"
                placeholder="Seu nome completo"
              />
            </label>
            {errors.full_name != null && (
              <p className="error">{errors.full_name?.message}</p>
            )}
            <label>
              <User />
              <InputMask
                mask="999.999.999-99"
                {...register('cpf')}
                placeholder="Seu cpf"
              ></InputMask>
            </label>
            {errors.cpf != null && (
              <p className="error">{errors.cpf?.message}</p>
            )}
            <label>
              <Password />
              <input
                type={password ? 'text' : 'password'}
                {...register('password')}
                placeholder="Sua senha"
              />
              <button type="button" onClick={handlePassword}>
                {password ? <ClosedEye /> : <Eye />}
              </button>
            </label>
            {errors.password != null && (
              <p className="error">{errors.password?.message}</p>
            )}
            <label>
              <Password />
              <input
                type={confirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                placeholder="Confirme sua senha"
              />
              <button type="button" onClick={handleConfirmPassword}>
                {confirmPassword ? <ClosedEye /> : <Eye />}
              </button>
            </label>
            {errors.confirmPassword != null && (
              <p className="error">{errors.confirmPassword?.message}</p>
            )}
            {error !== "" && <p className="error">{error}</p>}
          </div>
          <section>
            <BtnYellow type="submit">Cadastre-se</BtnYellow>
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
