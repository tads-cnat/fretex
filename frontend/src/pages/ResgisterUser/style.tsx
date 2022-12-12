import styled from "styled-components";
import { IActive } from "../../interfaces/styledComponents";
import { Wrapper } from "../../styles";

export const BgRegister = styled.section`
  background-color: #282828;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px;
  @media (max-width: 768px) {
    padding: 0 0 10px 0;
  }
`;

export const WrapperRegister = styled(Wrapper)`
  .typeRegister {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
  }
  @media (max-width: 768px) {
    .typeRegister {
      margin-top: 20px;
      margin-bottom: 10px;
    }
  }
`;

export const BtnTypeUser = styled.button<IActive>`
  background: none;
  color: var(--text-light);
  border: none;
  position: relative;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    width: ${(props) => (props.active ? "100%" : "0")};
    height: 3px;
    background-color: var(--theme-primary);
    display: block;
    transition: 0.5s;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #282828;
`;
