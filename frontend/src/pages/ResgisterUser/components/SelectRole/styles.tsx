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
  max-width: 2000px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
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
    width: 20vw;
    border-radius: 10px;
    background-color: #353535;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    section{
        display: flex;
        width: 100%;
        flex-direction: row;
        gap: 20px;
        padding: 40px 40px;
    }

    h1{
        color: var(--text-light);
        font-weight: 600;
        font-size: var(--font-large);
        margin: 10px auto;
        text-align: center;
    }
    
`;

export const OptionCard = styled.div<{ $selected?: boolean; }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.$selected ? 'var(--theme-primary)' : '#535353'};
    border-radius: 20px;
    padding: 10px 5px;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
        background-color: var(--theme-primary);
    }
    h1 {
        color: var(--text-light);
        font-weight: 600;
        font-size: var(--font-large);
    }
`;