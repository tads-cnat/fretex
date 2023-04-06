import styled from "styled-components";
import { type IStatusColors } from "../../../interfaces/styledComponents";
import { BtnPattern } from "../../../styles";

export const ContentMain = styled.main<IStatusColors>`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: center;

  .imgPerfil {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .valorProposta,
  .botoes,
  .recusadas,
  .aceita,
  .espera {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .recusadas,
  .espera,
  .aceita {
    color: ${(props) => (props.color ? props.color : "#000")};
    p {
      font-size: var(--font-small);
    }
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
    align-items: start;
    flex-direction: column;
    .botoes {
      flex-direction: column;
      align-items: flex-end;
      width: 100%;
      gap: 5px;
    }
    .botoes button {
      width: 100%;
      padding: 10px;
    }
    .contraproposta {
      padding: 4px 8px;
    }
    .valorProposta {
      svg, .imgPerfil {
        width: 30px;
        height: 30px;
      }
      p {
        font-size: var(--font-small);
      }
    }
  }
  @media (max-width: 500px) {
    flex-direction: ${(props) =>
      props.color === "#7B7B7B" || props.color === "#DC2E2E"
        ? "column"
        : "row"};

    align-items: ${(props) =>
      props.color === "#7B7B7B" || props.color === "#DC2E2E"
        ? "flex-start"
        : "center"};

    .espera p,
    .recusadas p,
    .aceita p {
      display: none;
    }
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
