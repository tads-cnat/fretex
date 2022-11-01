import { SpanYellow } from "../../styles";
import { 
  FooterStyled, FooterContainer,
  FooterRodaPe, FooterBoxLogo, 
  FooterBoxInfo, Logo, Title, 
  Info, Logos, ImgLink
} from "./styles";

import instagram from "../../assets/images/Vectorinstagram.svg";
import facebook from "../../assets/images/Vectorfacebook.svg";
import youtube from "../../assets/images/Vectoryoutube.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterStyled>
        <FooterBoxLogo>
          <Logo>Frete<SpanYellow>X</SpanYellow></Logo>
        </FooterBoxLogo>
        <FooterBoxInfo>
          <Title>CONTATO</Title>
          <Info>+55 21 99999-9999</Info>
          <Info>contato@fretex.com</Info>
          <Info>Rua do IF, 42 - Grêmio</Info>
          <Info>Natal - RN</Info>
          <Logos>
            <a href="/"><ImgLink src={instagram} alt="Instagram"/></a>
            <a href="/"><ImgLink src={facebook} alt="Facebook"/></a>
            <a href="/"><ImgLink src={youtube} alt="Youtube" /></a>
          </Logos>
        </FooterBoxInfo>
        <FooterBoxInfo>
          <Title>INFORMAÇÕES</Title>
          <Info>Seguros</Info>
          <Info>Contato</Info>
          <Info>Termos e Condicões</Info>
        </FooterBoxInfo>
      </FooterStyled>
      <FooterRodaPe>
        Fretex Alguns © direitos reservados
      </FooterRodaPe>
    </FooterContainer>
  );
};

export default Footer;
