import { useState, useEffect, useContext } from 'react';
import Email from '../../assets/Svg/Email';
import Password from '../../assets/Svg/Password';
import ClosedEye from '../../assets/Svg/ClosedEye';
import Eye from '../../assets/Svg/Eye';
import {
  ContainerPrincipal,
  ContainerForm,
  BtnYellow,
} from '../../components/RegisterComponents/RegisterClienteForm/styles';
import { ContainerContent2 } from './styles';
import { SpanYellow, Wrapper } from '../../styles';
import { BgRegister } from '../ResgisterUser/style';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { schemaLogin } from './schemas';
import { type ILogin } from '../../interfaces';
import { AuthContext } from '../../context/Auth/AuthContext';
import { useToggle } from '../../hooks/useToggle';

const Login = (): JSX.Element => {
  const { value: password, toggle: togglePassword } = useToggle();
  const [error, setError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<ILogin>({
    resolver: yupResolver(schemaLogin),
  });
  const { signin } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handlePassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    togglePassword();
  };

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<ILogin> = ({ email, password }) => {
    signin(email, password, Navigate, setError);
  };

  return (
    <BgRegister>
      <Wrapper bgColor="#282828">
        <ContainerPrincipal>
          <ContainerContent2>
            <div>
              <section>
                <h1>
                  <Link to="/">
                    Frete<SpanYellow>X</SpanYellow>
                  </Link>
                </h1>
              </section>
            </div>
          </ContainerContent2>
          <ContainerForm>
            <form onSubmit={() => handleSubmit(onSubmit)}>
              <h1>Entre na sua conta</h1>
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
                {error.length !== 0 && <p className="error">{error}</p>}
              </div>
              <section>
                <BtnYellow type="submit">Entrar</BtnYellow>
                <p>
                  Já tem uma conta?<Link to="/register"> Cadastrar-se</Link>
                </p>
              </section>
            </form>
          </ContainerForm>
        </ContainerPrincipal>
      </Wrapper>
    </BgRegister>
  );
};

export default Login;
