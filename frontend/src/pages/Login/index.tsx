import { useState, useEffect, useContext } from 'react';
import Email from '../../assets/Svg/Email';
import Password from '../../assets/Svg/Password';
import {
  ContainerPrincipal,
  ContainerForm,
} from '../../components/RegisterComponents/RegisterClienteForm/styles';
import { ContainerContent2 } from './styles';
import { SpanYellow, Wrapper } from '../../styles/globalStyles';
import { BgRegister } from '../ResgisterUser/style';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { schemaLogin } from './schemas';
import { type ILogin } from '../../interfaces';
import { AuthContext } from '../../context/Auth/AuthContext';
import Head from '../../components/Head';
import Button from '../../components/Global/Button';
import { Input } from '../../components/Input';

const Login = (): JSX.Element => {
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

  useEffect(() => {
    setFocus('email');
  }, [setFocus]);

  const onSubmit: SubmitHandler<ILogin> = ({ email, password }) => {
    signin(email, password, Navigate, setError);
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
      type: 'password',
      name: 'password',
      label: 'Senha',
      placeholder: 'Sua senha',
      required: true,
      svg: <Password />,
    },
  ];

  return (
    <>
      <Head title="Login" />
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
              <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Entre na sua conta</h1>
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

                  {error.length !== 0 && <p className="error">{error}</p>}
                </div>
                <section>
                  <Button type="submit" isButton>
                    Entrar
                  </Button>
                  <p>
                    Já tem uma conta?<Link to="/register"> Cadastrar-se</Link>
                  </p>
                </section>
              </form>
            </ContainerForm>
          </ContainerPrincipal>
        </Wrapper>
      </BgRegister>
    </>
  );
};

export default Login;
