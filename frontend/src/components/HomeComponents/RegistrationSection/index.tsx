import { BtnPattern, SpanYellow } from "../../../styles";
import { RegisterContainer, RegisterUser, Title, Text } from "./styles";
import imgCliente from "../../../assets/images/ParaClientes.png";
import imgFreteiro from "../../../assets/images/ParaFreteiros.png";

export const Registration = () => {
  return (
    <RegisterContainer>
      <RegisterUser img={imgCliente}>
        <Title>
          Para Clientes<SpanYellow>.</SpanYellow>
        </Title>
        <Text>Publique seus pedidos de fretes.</Text>
        <BtnPattern to="/register-cliente">Cadastre-se</BtnPattern>
      </RegisterUser>
      <RegisterUser img={imgFreteiro}>
        <Title>
          Para Freteiros<SpanYellow>.</SpanYellow>
        </Title>
        <Text> Encontre as melhores cargas para o seu veículo.</Text>
        <BtnPattern to="/register-freteiro">Cadastre-se</BtnPattern>
      </RegisterUser>
    </RegisterContainer>
  );
};

export default Registration;
