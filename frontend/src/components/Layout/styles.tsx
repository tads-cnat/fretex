import styled from "styled-components";

export const Container = styled.div`
  min-height: "95vh";
`;

export const InitialButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  border: 4px solid var(--theme-primary);
  background-color: #0000009d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: .5s;

  &:hover {
    background-color: #000000d5;
  }
  div {
    padding: 5px;
    box-shadow: 2px -2px 0 1px var(--theme-primary) inset;
    border: solid transparent;
    border-width: 0 0 2px 2px;
    transform: rotate(135deg);
  }

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    
  }
`;
