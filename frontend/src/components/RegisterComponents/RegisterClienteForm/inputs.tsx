import Email from '../../../assets/Svg/Email';
import Password from '../../../assets/Svg/Password';
import User from '../../../assets/Svg/User';
import { handleChangeInputCPF } from '../../../utils/handleChangeCPF';
import { type UseFormSetValue } from 'react-hook-form';

export const inputs = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Seu email',
    required: true,
    svg: <Email />,
  },
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
    placeholder: 'Seu CPF',
    required: true,
    svg: <User />,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Senha',
    placeholder: 'Sua senha',
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
