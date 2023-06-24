import { useEffect, useState } from 'react';
import { RegisterClienteForm, RegisterFreteiroForm } from './components';
import { BgRegister, BtnTypeUser, Container, WrapperRegister } from './style';
import { SEO } from '../../components';
import { btnTypeUserData } from './constants';
import { RiUserLine } from 'react-icons/ri';

const Register = (): JSX.Element => {
  const [typeResgister, setTypeRegister] = useState('cliente');

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
