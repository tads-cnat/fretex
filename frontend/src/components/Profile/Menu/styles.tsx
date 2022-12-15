import styled from "styled-components";

export const ContainerMenu = styled.div`
  display: flex;
  gap: 20px;

  .menuBtn {
    border: none;
    background-color: transparent;
    cursor: pointer;
    font-weight: 500;
    font-size: var(--font-medium);
    
    &::after {
        content: '';
        display: block;
        width: 0%;
        height: 4px;
        background-color: #353535;
        transition: .5s;
    }
    &:hover::after {
        width: 100%;
    }
  }
  .active::after {
        width: 100%;
    }
`;
