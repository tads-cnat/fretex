import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Email from '../../assets/Svg/Email';
import Password from '../../assets/Svg/Password';
import { Button, Input, LoadingPage, SEO } from '../../components';
import { AuthContext } from '../../context/Auth/AuthContext';
import { type ILogin } from '../../interfaces';
import { SpanYellow, Wrapper } from '../../styles/globalStyles';
import {
  ContainerForm,
  ContainerPrincipal,
} from '../ResgisterUser/components/RegisterClienteForm/styles';
import { ContainerContent2, DivIcon } from './styles';
import { BgRegister } from '../ResgisterUser/style';
import { schemaLogin } from './schemas';
import { RiLoginBoxLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';


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
  const { signin, isLoadingUser, user } = useContext(AuthContext);
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

  useEffect(() => {
    if (user) {
      Navigate('/');
      toast.info('Você já está logado');
    }
  }, [user]);

  if (isLoadingUser) return <LoadingPage />;
  return (
    <>
      <SEO title="Login" />
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
                <DivIcon>
                  <FaUserCircle color={'var(--bg-ligth)'} fontSize={'2.5rem'}/>
                </DivIcon>
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

                  {error.length !== 0 && <p className="error-light">{error}</p>}
                </div>
                <section>
                  <Button
                    type="submit"
                    isButton
                    isDisabled={isLoadingUser}
                    Icon={RiLoginBoxLine}
                  >
                    Entrar
                  </Button>
                  <p>
                    Não tem cadastro?<Link to="/register"> Crie sua conta</Link>
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
