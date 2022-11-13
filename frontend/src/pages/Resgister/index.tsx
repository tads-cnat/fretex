import RegisterClienteForm from "../../components/RegisterComponents/RegisterClienteForm";
import { Wrapper } from "../../styles";
import { BgRegister, Teste } from "./style";

const Register = () => {
  return (
    <BgRegister>
      <Teste>
        <Wrapper bgColor="#282828">
          <RegisterClienteForm />
        </Wrapper>
      </Teste>
    </BgRegister>
  );
};

export default Register;
