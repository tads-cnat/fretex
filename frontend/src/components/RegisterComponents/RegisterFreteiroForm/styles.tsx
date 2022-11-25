import styled from "styled-components";
import {
  ContainerContent,
  ContainerForm,
  ContainerPrincipal,
} from "../RegisterClienteForm/styles";

export const ContainerMain = styled(ContainerPrincipal)`
  display: grid;
  grid-template-columns: 2.5fr 1fr;

  @media (max-width: 1050px) {
    padding-top: 10px;
    grid-template-columns: 2fr;
    gap: 20px;
  }
`;

export const ContainerForm2 = styled(ContainerForm)`
  form {
    display: flex;
    max-width: 100%;
    justify-content: center;
    gap: 50px;
    padding-bottom: 0;

    label svg {
      color: #bfbfbf;
      transition: 0.5s;
    }
    label:focus-within svg {
      color: var(--theme-primary);
    }

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

export const RegisterPerson = styled.div`
  max-width: 100%;
  flex-grow: 1;
  
`;

export const PerfilImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  label {
    width: min-content;
    padding: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  label img {
    border-radius: 50%;
    object-fit: cover;
    width: 150px;
    transition: 0.5s;
  }
  label img:hover,
  label p:hover img {
    filter: brightness(50%);
  }

  input {
    display: none;
  }
`;

export const RegisterAddress = styled.div`
  flex-grow: 1;
  Button {
    margin-top: 15px;
  }
  .title {
    margin-bottom: 38px;
  }
  @media (max-width: 768px) {
    .title {
      margin-bottom: 20px;
    }
  }
`;

export const Login = styled.div`
  text-align: center;
  color: var(--text-grey-1);
  margin-bottom: 40px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const ContainerInfos = styled(ContainerContent)`
  @media (max-width: 1050px) {
    order: -1;
    div {
      padding-left: 0px;
      border: none;

      a{
        text-decoration: none;
        color: var(--text-light);
      }
    }
  }
`;

export const BtnYellow = styled.button`
  cursor: pointer;
  padding: 9px 32px;
  background-color: var(--theme-primary);
  color: var(--text-light);
  transition: 0.5s;
  text-decoration: none;
  border-radius: 6px;
  border: 0px;
  font-weight: 700;
  font-size: var(--font-medium);
  line-height: 24px;
  &:hover {
    background-color: var(--btn-hover);
  }
`;
