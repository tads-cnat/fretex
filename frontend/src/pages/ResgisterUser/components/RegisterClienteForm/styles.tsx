import styled from 'styled-components';
import { Animation } from '../../../../styles/globalStyles';

export const ContainerPrincipal = styled(Animation)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 50px;

  @media (max-width: 768px) {
    padding-top: 10px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  max-width: 400px;
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

  @media (max-width: 768px) {
    div {
      order: -1;
      padding-left: 0px;
      border: none;
    }
    h1 {
      margin-bottom: 20px;
    }
  }
`;

export const ContainerForm = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #353535;

  form {
    padding: 40px 40px;
    max-width: 500px;
  }

  form h1 {
    color: var(--bg-ligth);
    font-weight: 500;
    font-size: 28px;
    line-height: 24px;
    margin-bottom: 40px;
    text-align: center;
    @media (max-width: 768px) {
      font-size: 18px;
      margin-bottom: 20px;
    }
  }

  section {
    text-align: center;
  }

  section p a {
    transition: 0.5s;
    color: var(--text-light);
    &:hover {
      color: var(--btn-hover);
    }
  }

  section button {
    margin-bottom: 20px;
    width: 100%;
    font-size: var(--font-medium);
    cursor: pointer;
  }

  p {
    color: #a8a8a8;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: var(--bg-ligth);
  }

  label button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    order: 1;
    form {
      padding: 40px 20px;
    }
  }
`;
