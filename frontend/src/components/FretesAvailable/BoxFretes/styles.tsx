import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerMain = styled.div`
  display: grid;
  background-color: var(--bg-ligth);
  grid-template-columns: 1fr 300px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  @media (max-width: 768px) {
    & {
      grid-template-columns: 1fr;
    }
  }
`;

export const ContainerInfoBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 25px;
`;

export const ContainerInfos = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
  max-width: 550px;
  p {
    font-size: var(--font-medium);
    color: #787070;
  }
  h2 {
    font-size: var(--font-large);
  }
  img {
    width: 24px;
  }
`;

export const ContainerEndereco = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
`;

export const Seta = styled.img`
  transform: rotate(90deg);
`;

export const End = styled.div`
  display: flex;
  gap: 8px;
`;

export const ContainerCalendar = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  margin-bottom: 26px;
`;

export const ContainerImgMain = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;

export const ContainerImg = styled.img`
  object-fit: cover;
  border-radius: 0 8px 8px 0;
  height: 100%;
  width: 100%;
`;

export const BtnYellow = styled(Link)`
  display: inline-block;
  padding: 9px 27px;
  background-color: var(--theme-primary);
  color: var(--text-light);
  transition: 0.5s;
  text-decoration: none;
  border-radius: 6px;
  border: 0px;
  font-size: var(--font-medium);
  line-height: 24px;
  cursor: pointer;
  &:hover {
    background-color: var(--btn-hover);
  }
`;
