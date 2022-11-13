import React from "react";
import { Container, Description, Title } from "./styles";
import { Wrapper } from "../../styles";
import HomeBox from "../../components/HomeComponents/HomeBox/index";
import freteiro from "../../assets/images/caminhao.svg";
import cliente from "../../assets/images/cliente.svg";
import negociacao from "../../assets/images/negociacao.svg";
import HomeVideoSection from "../../components/HomeComponents/HomeVideoSection";
import SectionVantagens from "../../components/HomeComponents/SectionVantagens";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Registration from "../../components/HomeComponents/RegistrationSection";
import InfoSection from "../../components/HomeComponents/InfoSection";

const Home = () => {
  return (
    <>
      <Navbar/>
      <HomeVideoSection />
      <Wrapper>
        <Title id="howWorks">Como a FreteX funciona?</Title>

        <Description>
          Nós facilitamos a oferta do serviço de frete em todo o Brasil,
          atendendo Clientes e Freteiros Autônomos.
        </Description>

        <Container>
          <HomeBox
            title="Clientes"
            desc="Eles publicam os fretes em nossa plataforma"
            img={cliente}
          />
          <HomeBox
            title="Freteiros"
            desc="Eles procuram os fretes compatíveis e de seu interesse"
            img={freteiro}
            line={true}
          />
          <HomeBox
            title="Negociação"
            desc="Ambos negociam diretamente o frete, sem intermediário"
            img={negociacao}
          />
        </Container>
      </Wrapper>
      <SectionVantagens/>
      <InfoSection/>
      <Registration/>
      <Footer/>
    </>
  );
};

export default Home;
