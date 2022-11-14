import RegisterClienteForm from "../../components/RegisterComponents/RegisterClienteForm";
import RegisterFreteiroForm from "../../components/RegisterComponents/RegisterFreteiroForm";
import { Wrapper } from "../../styles";
import { BgRegister, Teste } from "./style";

const Register = () => {
  return (
    <BgRegister>
      <Teste>
        <Wrapper bgColor="#282828">
          <RegisterFreteiroForm />
        </Wrapper>
      </Teste>
    </BgRegister>
  );
};

export default Register;
