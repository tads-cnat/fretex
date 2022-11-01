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
              <Info>+55 21 99999-9999</Info>
              <Info>contato@fretex.com</Info>
              <Info>Rua do IF, 42 - Grêmio</Info>
              <Info>Natal - RN</Info>
              <Logos>
                <img src={instagram} alt="Instagram" />
                <img src={facebook} alt="Facebook" />
                <img src={youtube} alt="Youtube" />
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
