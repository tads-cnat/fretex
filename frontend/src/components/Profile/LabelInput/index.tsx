import { FieldError } from "react-hook-form";
import { InputLabel, LabelContainer } from "./styles";
import { ReactNode } from "react";

interface InterfaceInput {
  Icon: React.ElementType;
  isError: FieldError | undefined;
  errorMessage: string | undefined;
  style?: object;
  children?: ReactNode;
}

const LabelInput = ({
  Icon,
  style,
  isError,
  errorMessage,
  children,
}: InterfaceInput) => {
  return (
    <LabelContainer style={style}>
      <InputLabel>
        <Icon />
        {children}
      </InputLabel>
      {isError && <p className="error">{errorMessage}</p>}
    </LabelContainer>
  );
};

export default LabelInput;
