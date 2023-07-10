import styled from 'styled-components';
import {
  ContainerContent,
  ContainerForm,
  ContainerPrincipal,
} from '../RegisterClienteForm/styles';

export const ContainerMain = styled(ContainerPrincipal)`
  display: grid;
  grid-template-columns: 1fr;

  @media (max-width: 1050px) {
    padding-top: 10px;
    grid-template-columns: 2fr;
    gap: 20px;
  }
`;

export const ContainerForm2 = styled(ContainerForm)`
  form {
    max-width: 100%;
    
    label svg {
      color: #bfbfbf;
      transition: 0.5s;
    }

    label:focus-within svg {
      color: var(--theme-primary);
    }
    .button-div {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
    }

    .button-div button {
      width: 45%;
    }

    @media (max-width: 768px) {
      .button-div button {
        width: 100%;
      }
    }
  }
`;

export const DivFormContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  label svg {
    color: #bfbfbf;
    transition: 0.5s;
  }
  label:focus-within svg {
    color: var(--theme-primary);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const RegisterPerson = styled.div`
  .preview-div {
    margin-bottom: 0.625rem;
  }
`;

export const RegisterAddress = styled.div`
  .title {
    margin-bottom: 54px;
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
  margin-bottom: 1.5rem;
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
