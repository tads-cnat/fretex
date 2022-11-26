import styled from "styled-components";
import { IActive } from "../../../interfaces/styledComponents";

export const Container = styled.button<IActive>`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.active ? "#3f3f3f" : "#444444")};
  border: none;
  padding: 10px;
  border-radius: 100px 8px 8px 100px;
  cursor: pointer;
  gap: 7px;
  position: relative;

  &:hover {
    background-color: #3f3f3f;
  }

  .perfil {
    width: 40px;
  }
  .seta {
    transition: .2s;
    transform: ${(props) => (props.active ? "rotate(0deg)" : "rotate(180deg)")};
  }
  p {
    color: var(--text-light);
  }
  @media (max-width: 768px) {
    & {
        margin-bottom: 10px;
    }
  }
`;

export const Content = styled.div<IActive>`
  background-color: #444444;
  position: absolute;
  width: 100%;
  display: ${(props) => (props.active ? "block" : "none")};
  top: 90%;
  left: 0;
  z-index: 999;

  button {
    display: ${(props) => (props.active ? "block" : "none")};
    width: 100%;
    color: var(--text-light);
    border: none;
    cursor: pointer;
    text-align: left;
    padding: 3px;
    background-color: #444444;
    &:hover {
      background-color: #3f3f3f;
    }
  }
`;
