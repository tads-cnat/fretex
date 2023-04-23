import React, { type ForwardRefRenderFunction, forwardRef } from 'react';
import { InputContainer, Container } from './styles';
import { type FieldError } from 'react-hook-form';
import ClosedEye from '../../assets/Svg/ClosedEye';
import Eye from '../../assets/Svg/Eye';
import { useToggle } from '../../hooks/useToggle';

interface IInput {
  type: string;
  label?: string;
  svg?: string;
  error?: FieldError;
  required: boolean;
  mask?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInput> = (
  { type, svg, label, error = null, required = false, mask = null, ...rest },
  ref,
): JSX.Element => {
  const { value: seePassword, toggle: togglePassword } = useToggle(
    type !== 'password',
  );

  const handlePassword = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    togglePassword();
  };
  console.log(error?.message);
  return (
    <Container>
      {label !== undefined && (
        <span className="label">
          {label}
          {required && <span className="required">*</span>}
        </span>
      )}
      <InputContainer>
        {svg !== undefined && svg}
        <input ref={ref} type={seePassword ? 'text' : 'password'} {...rest} />
        {type === 'password' && (
          <button type="button" onClick={handlePassword}>
            {seePassword ? <ClosedEye /> : <Eye />}
          </button>
        )}
      </InputContainer>
      {error != null && <p className="error">{error.message}</p>}
    </Container>
  );
};

export const Input = forwardRef(InputBase);
