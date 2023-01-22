import styled from "styled-components";

export const FormContainer = styled.form`
  margin-bottom: 20px;

  .valorContainer {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding-top: 20px;
    span {
      font-weight: 600;
      font-size: var(--font-large);
      margin-bottom: 10px;
    }
  }

  .submitContainer {
    text-align: center;
  }
`;

export const ContainerVeiculos = styled.div`
  height: 40vh;
  padding: 0 10px;
  overflow-y: scroll;

  .labelRadio {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
  }

  .cadastrarVeiculo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 100%;
  }
`;
