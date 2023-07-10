import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoadingPage, SEO } from '../../components';
import { AuthContext } from '../../context/Auth/AuthContext';
import { BackButton, EmailCardForm, SelectRole, RegisterClienteForm, RegisterFreteiroForm } from './components';
import { BgRegister, Container, WrapperRegister } from './style';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Register = (): JSX.Element => {
  const { user, isLoadingUser } = useContext(AuthContext);
  const role = useSelector((state: RootState) => state.registerStep.role);
  const step = useSelector((state: RootState) => state.registerStep.step);
  const Navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

            { step !== 1 && (
              <BackButton/>
            )}
            
            { step === 1 && (
              <EmailCardForm/>
            )}

            { step === 2 && (
              <SelectRole/>
            )}

            { (step === 3 && role == "cliente") && (
              <RegisterClienteForm/>
            )}

            { (step === 3 && role == "freteiro") && (
              <RegisterFreteiroForm/>
            )}

            

          </WrapperRegister>
        </Container>
      </BgRegister>{' '}
    </>
  );
};

export default Register;
