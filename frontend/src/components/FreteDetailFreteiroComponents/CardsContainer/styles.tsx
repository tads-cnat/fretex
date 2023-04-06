import styled, { keyframes } from "styled-components";
import { type IActive } from "../../../interfaces/styledComponents";

export const Container = styled.section`
  border-radius: 6px;
  border: 1px solid #eaeaea;
  max-width: 100%;
  padding: 16px;
`;

export const ContentHeader = styled.header<IActive>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${(props) => (props.active ? "1px solid #e9e7e7" : "none")};
  padding-bottom: ${(props) => (props.active ? "10px" : "0")};
  margin-bottom: ${(props) => (props.active ? "20px" : "0")};

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
  }

  .toggle {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.3s;
    svg {
      width: 100%;
      height: 100%;
    }
  }

  .toggle:hover {
    opacity: 1;
  }
`;

export const ContentMain = styled.main<IActive>`
  display: flex;
  flex-direction: column;
  height: ${(props) => (props.active ? "100%" : "0")};
  overflow: hidden;
`;
