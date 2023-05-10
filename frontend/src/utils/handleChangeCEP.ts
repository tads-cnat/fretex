import { type UseFormSetValue } from 'react-hook-form';

export const handleChangeInputCEP = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<any>,
  field: string,
): void => {
  let value = e.target.value;
  value = value
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2')
    .replace(/(-\d{3})\d+$/, '$1');

  setValue(field, value);
};
