import styled from "styled-components";
import { Link } from "react-router-dom";
import { type IRegisterImage } from "../../../interfaces/styledComponents";

export const RegisterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

export const RegisterUser = styled.div<IRegisterImage>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 125px 0;
  position: relative;

  &::before {
    width: 100%;
    content: "";
    height: 100%;
    display: block;
    position: absolute;
    background-image: url(${(props) => props.img});
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
    filter: brightness(40%);
    transition: 0.5s;
  }
  &:hover::before {
    filter: brightness(80%);
  }

  & p,
  & h2 {
    transition: .5s;
  }

  &:hover p,
  &:hover h2 {
    transform: translateY(-15px);
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }
`;

export const Text = styled.p`
  color: var(--bg-ligth);
  margin-bottom: 20px;
  text-align: center;
`;

export const ButtonLink = styled(Link)`
  padding: 9px 32px;
  background-color: var(--theme-primary);
  color: var(--btn-text-color1);
  transition: 0.5s;

  &:hover p,
  &:hover h2 {
    transform: scale(1.02) translateY(-15px);
  }

  @media (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const Title = styled.h2`
  color: var(--bg-ligth);
  margin-bottom: 10px;
`;

export const RegisterImage = styled.img`
  background-image: url();
`;
