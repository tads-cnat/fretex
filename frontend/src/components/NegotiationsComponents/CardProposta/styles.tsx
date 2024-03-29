import styled from 'styled-components';
import { type IStatusColors } from '../../../interfaces/styledComponents';

export const Container = styled.section`
  border: 1px solid #eaeaea;
  border-radius: 6px;
  padding: 16px;
`;

export const ContentMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContentHeader = styled.header<IStatusColors>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #e9e7e7;
  margin-bottom: 20px;
  span {
    padding: 2px 30px;
    color: ${({ color }) => color};
    font-size: small;
    font-weight: 400;
    background-color: ${({ bg }) => bg};
    border-radius: 16px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  button {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      opacity: 0.8;
      transition: 0.3s;
    }
    img:hover {
      opacity: 1;
    }
  }
  @media (max-width: 500px) {
    span {
      display: none;
    }
  }
`;
