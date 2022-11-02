import { SpanYellow, Wrapper } from "../../styles";
import {
  FooterStyled,
  FooterContainer,
  FooterRodaPe,
  FooterBoxLogo,
  FooterBoxInfo,
  Logo,
  Title,
  Info,
  Logos,
  FinalFooterContainer,
  ImgLink,
} from "./styles";
import instagram from "../../assets/images/Vectorinstagram.svg";
import facebook from "../../assets/images/Vectorfacebook.svg";
import youtube from "../../assets/images/Vectoryoutube.svg";

const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Wrapper>
          <FooterStyled>
            <FooterBoxLogo>
              <Logo>
                Frete<SpanYellow>X</SpanYellow>
              </Logo>
            </FooterBoxLogo>
            <FooterBoxInfo>
              <Title>CONTATO</Title>
              <Info marginBottom={"5px"}>+55 21 99999-9999</Info>
              <Info
                border={"1px solid #424242"}
                marginBottom={"10px"}
                padding={"0 0 10px 0"}
              >
                contato@fretex.com
              </Info>
              <Info marginBottom={"5px"}>Rua do IF, 42 - Grêmio</Info>
              <Info
                border={"1px solid #424242"}
                marginBottom={"20px"}
                padding={"0 0 10px 0"}
              >
                Natal - RN
              </Info>
              <Logos>
                <a href="/">
                  <ImgLink src={instagram} alt="Instagram" />
                </a>
                <a href="/">
                  <ImgLink src={facebook} alt="Facebook" />
                </a>
                <a href="/">
                  <ImgLink src={youtube} alt="Youtube" />
                </a>
              </Logos>
            </FooterBoxInfo>
            <FooterBoxInfo>
              <Title>INFORMAÇÕES</Title>
              <Info>Seguros</Info>
              <Info>Contato</Info>
              <Info>Termos e Condicões</Info>
            </FooterBoxInfo>
          </FooterStyled>
        </Wrapper>
      </FooterContainer>
      <FinalFooterContainer>
        <Wrapper>
          <FooterRodaPe>Fretex Alguns © direitos reservados</FooterRodaPe>
        </Wrapper>
      </FinalFooterContainer>
    </footer>
  );
};

export default Footer;
