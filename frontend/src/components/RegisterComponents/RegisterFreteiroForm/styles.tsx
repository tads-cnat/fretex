import styled from 'styled-components';
import {
  ContainerContent,
  ContainerForm,
  ContainerPrincipal,
} from '../RegisterClienteForm/styles';

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

export const RegisterAddress = styled.div`
  flex-grow: 1;
  Button {
    margin-top: 15px;
  }
  .title {
    margin-bottom: 53px;
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
  margin: 40px 0;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  a:hover {
    color: var(--btn-hover);
  }
`;

export const ContainerInfos = styled(ContainerContent)`
  @media (max-width: 1050px) {
    order: -1;
    div {
      padding-left: 0px;
      border: none;

      a {
        text-decoration: none;
        color: var(--text-light);
      }
    }
  }
`;
