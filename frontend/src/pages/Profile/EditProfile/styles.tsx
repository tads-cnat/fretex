import styled from "styled-components";
import { PerfilImg } from "../../../components/RegisterComponents/RegisterFreteiroForm/styles";

export const Container = styled.div`
  margin-bottom: 50px;
  .title {
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .containerButton {
    display: flex;
    justify-content: center;
  }
`;

export const PerfilImgUpdate = styled(PerfilImg)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 10px;
  overflow: hidden;
  margin-bottom: 10px;
  p {
    color: var(--text-grey-2);
  }
`;

export const InputsContainerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 20px;
  margin-bottom: 20px;
`;

export const GridContent = styled.div`
  h2 {
    margin-bottom: 20px;
  }
`;

export const GridEndereco = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 20px;
  h2 {
    grid-column: 1/-1;
    margin-bottom: 20px;
  }
`;
