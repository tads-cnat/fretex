import { Logo } from '..';
import { Wrapper } from '../../styles/globalStyles';
import {
  FooterStyled,
  FooterContainer,
  FooterRodaPe,
  FooterBoxLogo,
  FooterBoxInfo,
  Title,
  Info,
  Logos,
  FinalFooterContainer,
} from './styles';
import { BsInstagram, BsFacebook, BsYoutube } from 'react-icons/bs';

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <FooterContainer>
        <Wrapper>
          <FooterStyled>
            <FooterBoxLogo>
              <Logo width={'250px'}  />
            </FooterBoxLogo>
            <FooterBoxInfo>
              <Title>CONTATO</Title>
              <Info marginBottom={'5px'}>+55 21 99999-9999</Info>
              <Info
                border={'1px solid #424242'}
                marginBottom={'10px'}
                padding={'0 0 10px 0'}
              >
                contato@fretex.com
              </Info>
              <Info marginBottom={'5px'}>Rua do IF, 42 - Grêmio</Info>
              <Info
                border={'1px solid #424242'}
                marginBottom={'20px'}
                padding={'0 0 10px 0'}
              >
                Natal - RN
              </Info>
              <Logos>
                <a href="/" className="imgLink">
                  <BsInstagram color={'white'} fontSize={'2rem'} />
                </a>
                <a href="/" className="imgLink">
                  <BsFacebook color={'white'} fontSize={'2rem'} />
                </a>
                <a href="/" className="imgLink">
                  <BsYoutube color={'white'} fontSize={'2rem'} />
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
