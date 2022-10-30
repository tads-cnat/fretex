import React from "react";
import { Container, Description, Title } from "./styles";
import { Wrapper } from "../../styles";
import HomeBox from "../../components/HomeBox/index";
import image from "../../assets/images/logo.png";
import HomeVideoSection from "../../components/HomeVideoSection";

const Home = () => {
  return (
    <>
      <HomeVideoSection />
      <Wrapper>
        <Title>Como a FreteX funciona?</Title>

        <Description>
          Nós facilitamos a oferta do serviço de frete em todo o Brasil,
          atendendo Clientes e Freteiros Autônomos.
        </Description>

        <Container>
          <HomeBox title="teste" desc="teste2" img={image} />
          <HomeBox title="teste" desc="teste2" img={image} />
          <HomeBox title="teste" desc="teste2" img={image} />
        </Container>
      </Wrapper>
    </>
  );
};

export default Home;
