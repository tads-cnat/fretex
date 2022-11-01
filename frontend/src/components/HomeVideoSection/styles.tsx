import styled from "styled-components";
import { Link } from "react-router-dom";

export const VideoSection = styled.div`
  background: var(--bg-dark);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 80vh;
  position: relative;
  margin-bottom: var(--mb-80);
`;

export const ContainerVideo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ContainerVideoContent = styled.div`
  max-width: 700px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoH1 = styled.h1`
  color: var(--text-light);
  font-size: var(--font-xxl);
  text-align: center;
  margin-bottom: 15px;
`;

export const VideoP = styled.p`
  color: var(--text-grey-1);
  font-size: var(--font-large);
  text-align: center;
  max-width: 500px;
  margin-bottom: var(--mb-20);
`;

export const VideoBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonLink = styled(Link)`
  padding: 9px 32px;
  background-color: var(--theme-primary);
  color: var(--btn-text-color1);
  transition: 0.5s;
  text-decoration: none;
  border-radius: 6px;
  font-size: var(--font-medium);
  font-weight: 500;
  &:hover {
    background-color: var(--btn-hover);
  }
`;
