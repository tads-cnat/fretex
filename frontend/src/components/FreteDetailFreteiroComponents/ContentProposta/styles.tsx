import styled from "styled-components";
import { BtnPattern } from "../../../styles";

export const ContentMain = styled.main`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  .valorProposta,
  .botoes {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .contraproposta {
    cursor: pointer;
    border: none;
    padding: 4px 20px;
    border: 1px solid;
    border-radius: 4px;
    background-color: transparent;
    font-weight: bolder;
    transition: 0.3s;

    &:hover {
      background-color: #000000;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
    .botoes {
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      gap: 5px;
    }
    .contraproposta {
      padding: 4px 8px;
    }
  }
  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;

    .contraproposta {
      width: 100%;
    }
  }
`;

export const BtnGreen = styled.button`
  cursor: pointer;
  border: none;
  padding: 4px 20px;
  border-radius: 4px;
  background-color: #46843c;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    background-color: #386b30;
  }

  @media (max-width: 768px) {
    padding: 4px 40px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;
