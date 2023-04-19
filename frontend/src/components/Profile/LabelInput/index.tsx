import { type FieldError } from 'react-hook-form';
import { InputLabel, LabelContainer } from './styles';
import { type ReactNode } from 'react';

interface InterfaceInput {
  Icon?: React.ElementType;
  isError: FieldError | undefined;
  errorMessage: string | undefined;
  style?: object;
  backgroundColorInput?: string;
  children?: ReactNode;
}

export interface InputLabelStyles {
  backgroundColor?: string;
}

const LabelInput = ({
  Icon,
  style,
  isError,
  errorMessage,
  children,
  backgroundColorInput,
}: InterfaceInput): JSX.Element => {
  return (
    <LabelContainer style={style}>
      <InputLabel backgroundColor={backgroundColorInput}>
        {Boolean(Icon) && (typeof Icon === 'function' ? <Icon /> : Icon)}
        {children}
      </InputLabel>
      {isError != null && <p className="error">{errorMessage}</p>}
    </LabelContainer>
  );
};

export default LabelInput;
