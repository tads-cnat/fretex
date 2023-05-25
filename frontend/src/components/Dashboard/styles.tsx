import styled from 'styled-components';
import { type IStatus } from '../../interfaces/styledComponents';
import { type IActive } from '../../interfaces/IActive';

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 16px;
  max-width: 900px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: var(--bg-ligth);
`;

export const BoxPedido = styled.div<IActive>`
  border: 1px solid #f3f3f3;
  border-radius: 6px;
  padding: 24px;
  display: ${({ active }) => (active ? 'block' : 'none')};
`;

export const AlertText = styled.div`
  text-align: center;
  margin: 15vh 0;
`;

export const Header = styled.div<IStatus>`
  display: flex;
  justify-content: space-between;
  div {
    display: flex;
    column-gap: 28px;
    align-items: center;
    span {
      display: block;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      background-color: ${(props) => props.status};
    }
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;

    svg:hover {
      fill: #f3f3f3;
    }
  }
`;

export const Botoes = styled.div`
  display: flex;
  column-gap: 16px;

  a,
  button,
  .btnRed {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border-radius: 6px;
    color: var(--theme-primary);
    font-size: var(--font-medium);
    font-weight: 700;
    padding: 8px 16px;
    height: 40px;
    width: 160px;
    border: 1px solid var(--theme-primary);
    transition: 0.5s;
    cursor: pointer;
    :hover {
      background-color: #f3f3f3;
    }
  }

  button.btnRed {
    border: 1px solid #dc2e2e;
    color: #dc2e2e;
  }
`;
