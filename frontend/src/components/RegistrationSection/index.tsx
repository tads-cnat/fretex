import { SpanYellow, Wrapper } from "../../styles";
import {
  RegisterContainer,
  RegisterUser,
  RegisterImage,
  ButtonLink,
  Title,
  Text,
} from "./styles";
import imgCliente from "../../assets/images/ParaClientes.png";
import imgFreteiro from "../../assets/images/ParaFreteiros.png";

export const Registration = () => {
  return (
    <RegisterContainer>
      <RegisterUser img={imgCliente}>
        <Title>
          Para Clientes<SpanYellow>.</SpanYellow>
        </Title>
        <Text>Publique seus pedidos de fretes.</Text>
        <ButtonLink to="/register-cliente">Cadastre-se</ButtonLink>
      </RegisterUser>
      <RegisterUser img={imgFreteiro}>
        <Title>
          Para Freteiros<SpanYellow>.</SpanYellow>
        </Title>
        <Text> Encontre as melhores cargas para o seu veículo.</Text>
        <ButtonLink to="/register-freteiro">Cadastre-se</ButtonLink>
      </RegisterUser>
    </RegisterContainer>
  );
};

export default Registration;
