import { RootState } from '../../../../store';
import PersonalInfo from './personalInfo';
import EnderecoInfo from './enderecoInfo';
import { useSelector } from 'react-redux';

export const RegisterFreteiroForm = (): JSX.Element => {

  const freteiroStep = useSelector((state: RootState) => state.registerStep.freteiroStep);

  return (
    
    <>
    
      {freteiroStep === 1 && <PersonalInfo />}
      {freteiroStep === 2 && <EnderecoInfo />}

    </>

  );

};