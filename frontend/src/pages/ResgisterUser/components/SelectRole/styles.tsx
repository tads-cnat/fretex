import styled from 'styled-components';
import { Animation } from '../../../../styles/globalStyles';

export const ContainerPrincipal = styled(Animation)`
  display: flex;
  justify-items: center;

  @media (max-width: 2000px) {
    padding-top: 10px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  max-width: 2000;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    padding-left: 50px;
    border-left: 1px solid #5f5f5f;
    height: 70%;
    a {
      text-decoration: none;
      color: var(--text-light);
    }
  }
  h1 {
    color: var(--bg-ligth);
    font-weight: 600;
    font-size: var(--font-xl);
    margin-bottom: 20px;
  }

  h2 {
    color: var(--bg-ligth);
    font-weight: 600;
    font-size: var(--font-large);
    margin-bottom: 10px;
  }

  p {
    color: var(--bg-ligth);
    font-weight: 600;
    font-size: var(--font-medium);
  }

  @media (max-width: 2000px) {
    div {
      order: -1;
      padding-left: 0px;
      border: none;
    }
    h1 {
      margin-bottom: 10px;
    }
  }
`;

export const ContainerForm = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: #353535;
    
    section{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 40px 40px;
    }
    
`;

export const OptionCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-ligth);
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background-color: var(--bg-dark);
    }
    h1 {
        color: var(--text-dark);
        font-weight: 600;
        font-size: var(--font-large);
        margin-bottom: 10px;
    }
`;