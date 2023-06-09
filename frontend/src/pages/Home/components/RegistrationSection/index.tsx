import { SpanYellow } from '../../../../styles/globalStyles';
import { Button } from '../../../../components';
import { RegisterContainer, RegisterUser, Title, Text } from './styles';
import imgCliente from '../../../../assets/images/ParaClientes.png';
import imgFreteiro from '../../../../assets/images/ParaFreteiros.png';

export const Registration = (): JSX.Element => {
  const handleTypeUser = (type: string): void => {
    localStorage.setItem('typeUser', type);
  };

  return (
    <RegisterContainer id="registration">
      <RegisterUser img={imgCliente}>
        <Title>
          Para Clientes<SpanYellow>.</SpanYellow>
        </Title>
        <Text>Publique seus pedidos de fretes.</Text>

        <Button
          link="/register"
          onClick={() => {
            handleTypeUser('cliente');
          }}
        >
          cadastre-se
        </Button>
      </RegisterUser>
      <RegisterUser img={imgFreteiro}>
        <Title>
          Para Freteiros<SpanYellow>.</SpanYellow>
        </Title>
        <Text> Encontre as melhores cargas para o seu veículo.</Text>
        <Button
          link="/register"
          onClick={() => {
            handleTypeUser('freteiro');
          }}
        >
          cadastre-se
        </Button>
      </RegisterUser>
    </RegisterContainer>
  );
};
