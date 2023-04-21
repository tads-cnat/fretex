import React from 'react';
import {} from './styles';

interface IInput {
  label?: string;
  name: string;
  type: string;
  placeholder: string;
  autoComplete?: string;
}

const input = ({
  label,
  name,
  type,
  placeholder,
  autoComplete = 'off',
  ...register
}: IInput): JSX.Element => {
  return (
    <>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        {...register}
      />
    </>
  );
};

export default input;
