import { useEffect, useState } from 'react';
import RegisterClienteForm from '../../components/RegisterComponents/RegisterClienteForm';
import RegisterFreteiroForm from '../../components/RegisterComponents/RegisterFreteiroForm';
import { BgRegister, BtnTypeUser, Container, WrapperRegister } from './style';

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
    <BgRegister>
      <Container>
        <WrapperRegister bgColor="#282828">
          <div className="typeRegister">
            <BtnTypeUser
              onClick={() => {
                handleChangeTypeOfUser('cliente');
              }}
              active={typeResgister === 'cliente'}
            >
              Cliente
            </BtnTypeUser>
            <BtnTypeUser
              onClick={() => {
                handleChangeTypeOfUser('freteiro');
              }}
              active={typeResgister === 'freteiro'}
            >
              Freteiro
            </BtnTypeUser>
          </div>
          {typeResgister === 'cliente' ? (
            <RegisterClienteForm />
          ) : (
            <RegisterFreteiroForm />
          )}
        </WrapperRegister>
      </Container>
    </BgRegister>
  );
};

export default Register;
