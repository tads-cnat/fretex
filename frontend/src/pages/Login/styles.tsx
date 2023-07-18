import styled from 'styled-components';
import { ContainerContent } from '../ResgisterUser/components/RegisterClienteForm/styles';

export const ContainerContent2 = styled(ContainerContent)`
  div {
    display: flex !important;
    justify-content: center !important;
    border: none;
    margin: 0;
    padding: 0 !important;
    padding-right: 80px;
    a {
      text-decoration: none;
      color: var(--text-light);
    }
  }

  h1 {
    font-size: 55px;
  }

  @media (max-width: 768px) {
    div {
      border: none;
      padding-right: 0;
    }
    h1 {
      font-size: 45px;
    }
  }
`;

export const DivIcon = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 1rem;
`;
