import {
  ContainerVideo,
  ContainerVideoContent,
  VideoBg,
  VideoBtnWrapper,
  VideoH1,
  VideoP,
  VideoSection,
} from './styles';
import Button from '../../Global/Button';
import Video from '../../../assets/videos/video.mp4';
import { SpanYellow } from '../../../styles/globalStyles';

const HomeVideoSection = (): JSX.Element => {
  return (
    <VideoSection>
      <ContainerVideo>
        <VideoBg autoPlay loop muted src={Video} />
      </ContainerVideo>
      <ContainerVideoContent>
        <VideoH1>
          Frete<SpanYellow>X</SpanYellow> sua encomenda sem complicação
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

export default HomeVideoSection;
