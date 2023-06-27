import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoadingPage, SEO } from '../../components';
import { AuthContext } from '../../context/Auth/AuthContext';
import { RegisterClienteForm, RegisterFreteiroForm } from './components';
import { btnTypeUserData } from './constants';
import { BgRegister, BtnTypeUser, Container, WrapperRegister } from './style';
import { RiUserLine } from 'react-icons/ri';

const Register = (): JSX.Element => {
  const { user, isLoadingUser } = useContext(AuthContext);
  const [typeResgister, setTypeRegister] = useState('cliente');
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const type = localStorage.getItem('typeUser');
    if (type !== null) {
      type === 'cliente'
        ? setTypeRegister('cliente')
        : setTypeRegister('freteiro');
    }
  }, []);

  const handleChangeTypeOfUser = (type: string): void => {
    setTypeRegister(type);
    localStorage.setItem('typeUser', type);
  };

  useEffect(() => {
    if (user) {
      Navigate('/');
      toast.info('Você já está logado');
    }
  }, [user]);

  if (isLoadingUser) return <LoadingPage />;
  return (
    <>
      <SEO title="Cadastro" />
      <BgRegister>
        <Container>
          <WrapperRegister bgColor="#282828">
            <div className="typeRegister">
              {btnTypeUserData.map((btn, i) => (
                <BtnTypeUser
                  key={i}
                  onClick={() => {
                    handleChangeTypeOfUser(btn.type);
                  }}
                  active={typeResgister === btn.type}
                  typeRegister={btn.type}
                >
                  <RiUserLine />
                  {btn.text}
                </BtnTypeUser>
              ))}
            </div>
            {typeResgister === 'cliente' ? (
              <RegisterClienteForm />
            ) : (
              <RegisterFreteiroForm />
            )}
          </WrapperRegister>
        </Container>
      </BgRegister>{' '}
    </>
  );
};

export default Register;
