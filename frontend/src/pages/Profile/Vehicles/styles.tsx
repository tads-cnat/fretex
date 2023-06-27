import styled from 'styled-components';

export const QtdVeiculos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 30px;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  h2 {
    display: block;
    font-weight: 500;
    color: var(--text-dark);
    font-size: var(--font-medium);
  }
  .inputsText input {
    margin-top: 4px;
    width: 100%;
    height: 40px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #dcdcdc;
    transition: 1s;
  }

  span {
    margin: 0 10px 0 5px;
  }
`;
