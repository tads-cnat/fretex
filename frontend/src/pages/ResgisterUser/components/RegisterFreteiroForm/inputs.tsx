import Email from '../../../../assets/Svg/Email';
import User from '../../../../assets/Svg/User';
import Password from '../../../../assets/Svg/Password';
import { handleChangeInputCPF } from '../../../../utils/handleChangeCPF';
import { type UseFormSetValue } from 'react-hook-form';

export const inputs = [
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
    onChange: (
      e: React.ChangeEvent<HTMLInputElement>,
      setValue: UseFormSetValue<any>,
    ) => {
      handleChangeInputCPF(e, setValue, 'cpf');
    },
    placeholder: '000.000.000-00',
    required: true,
    svg: <User />,
  },

  {
    type: 'password',
    name: 'password',
    label: 'Senha',
    placeholder: 'Mínimo de 8 caracteres',
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
