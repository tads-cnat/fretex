import styled from 'styled-components';
import { PerfilImg } from '../../../components/RegisterComponents/RegisterFreteiroForm/styles';
import { type IActive } from '../../../interfaces/IActive';

export const Container = styled.div`
  margin-bottom: 50px;
  .title {
    text-align: center;
    font-size: var(--font-xl);
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .containerButton {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1200px) {
    .title {
      margin-bottom: 0px;
      margin-top: 0px;
    }
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

export const InputsContainerGrid = styled.div<IActive>`
  display: grid;
  grid-template-columns: ${({ active }) => (active ? '1fr 2fr' : '1fr')};
  max-width: ${({ active }) => (active ? '100%' : '400px')};
  margin: ${({ active }) => (active ? '0' : '0 auto')};
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: ${({ active }) => active && '1fr'};
  }
`;

export const GridContent = styled.div<IActive>`
  h2 {
    margin-bottom: 20px;
    display: ${({ active }) => (active ? 'inline-block' : 'none')};
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

  @media (max-width: 1200px) {
    gap: 0px 10px;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;
