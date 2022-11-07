import React from "react";
import {
  ButtonLink,
  ContainerVideo,
  ContainerVideoContent,
  VideoBg,
  VideoBtnWrapper,
  VideoH1,
  VideoP,
  VideoSection,
} from "./styles";
import Video from "../../assets/videos/video.mp4";
import { SpanYellow } from "../../styles";

const HomeVideoSection = () => {
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
          <ButtonLink to="/choose-user">Comece agora</ButtonLink>
        </VideoBtnWrapper>
      </ContainerVideoContent>
    </VideoSection>
  );
};

export default HomeVideoSection;