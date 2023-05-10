import { type UseFormSetValue } from 'react-hook-form';

export const handleChangeInputCPF = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<any>,
  field: string,
): void => {
  let value = e.target.value;
  value = value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1-$2')
    .replace(/(-\d{2})\d+$/, '$1');

  setValue(field, value);
};
