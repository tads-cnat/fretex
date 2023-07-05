import {
  ContainerVideo,
  ContainerVideoContent,
  VideoBg,
  VideoBtnWrapper,
  VideoH1,
  VideoP,
  VideoSection,
} from './styles';
import { Button, Logo } from '../../../../components';
import ImagemDeCaixasHomePage from '../../../../assets/images/imagemDeCaixasHomePage.jpg';

export const HomeVideoSection = (): JSX.Element => {
  return (
    <VideoSection>
      <ContainerVideo>
        <VideoBg src={ImagemDeCaixasHomePage} />
      </ContainerVideo>
      <ContainerVideoContent>
        <VideoH1>
          <Logo /> seu frete sem complicação
        </VideoH1>
        <VideoP>
          A maior plataforma de transporte rodoviário de cargas do Brasil
        </VideoP>
        <VideoBtnWrapper>
          <Button link="/register">Comece agora</Button>
        </VideoBtnWrapper>
      </ContainerVideoContent>
    </VideoSection>
  );
};
