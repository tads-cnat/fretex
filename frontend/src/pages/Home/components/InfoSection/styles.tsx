import styled from 'styled-components';
import { type IRegisterImage2 } from '../../../../interfaces/styledComponents';

export const ContainerInfos = styled.section<IRegisterImage2>`
  background: rgba(246, 173, 8, 0.75);
  background-image: url(${(props) => props.img}), url(${(props) => props.img2});
  background-repeat: no-repeat;
  background-position: top 40px right 20px, bottom 40px right 20px;
  font-weight: bold;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Img = styled.img`
  height: 90%;
  width: 90%;
  object-fit: cover;
  border-radius: 0px 20px 20px 0px;
`;

export const ContainerInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 25px 50px 0px;
  p {
    color: var(--bg-ligth);
    font-weight: 600;
    font-size: var(--font-xxl);
    line-height: 60px;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);
    max-width: 12ch;
    margin-right: auto;
    @media (max-width: 900px) {
      margin-right: 0px;
    }
    @media (max-width: 768px) {
      line-height: 40px;
    }
  }
`;
