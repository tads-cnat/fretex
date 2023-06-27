import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  row-gap: 1.5em;
  p {
    border-radius: 15px;
    background-color: #e7e7e7;
    color: #7b7b7b;
    padding: 0px 15px 0px 15px;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 2rem;
    row-gap: 0.75em;
  }
  @media (max-width: 500px) {
    p {
      display: none;
    }
  }
`;

export const PropostaContainer2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  gap: 0.625rem;

  div {
    grid-column: 1/-1;
  }

  .containerCards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    align-items: flex-start;
    gap: 10px;
  }

  img {
    height: 50px;
    width: 50px;
  }

  p {
    line-height: 18px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    .containerCards {
      grid-template-columns: 1fr;
    }
  }
`;

export const BtnGreen = styled.button`
  cursor: pointer;
  border: none;
  padding: 6px 20px;
  border-radius: 4px;
  background-color: #46843c;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    background-color: #386b30;
  }
`;

export const ValorPerfil = styled.div`
  display: flex;
  gap: 10px;
  margin: 0 100px 0 0;
`;
export const AceitaContra = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;
