import styled from "styled-components";

export const ContainerPrincipal = styled.div`
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
  }
  h1 {
    color: var(--bg-ligth);
    font-style: normal;
    font-weight: 600;
    font-size: 42px;
    line-height: 72px;
    margin-bottom: 40px;
  }

  h2 {
    color: var(--bg-ligth);
    font-style: normal;
    font-weight: 600;
    font-size: 28px;
    line-height: 30px;
    margin-bottom: 20px;
  }

  p {
    color: var(--bg-ligth);
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
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
    padding: 80px 40px;
    max-width: 500px;
  }

  form h1 {
    color: var(--bg-ligth);
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 24px;
    margin-bottom: 40px;
  }

  form div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
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

  label {
    display: flex;
    align-items: center;
    background: #1b1b1b;
    border-radius: 10px;
    width: 100%;
    border: 2px solid #1b1b1b;
    padding: 0 10px;
    transition: 0.5s;
  }

  label svg {
    color: #bfbfbf;
    transition: 0.5s;
  }
  label:focus-within svg {
    color: var(--theme-primary);
  }

  label:focus-within {
    border: 2px solid var(--theme-primary);
  }
  label input:focus {
    background-color: transparent !important;
  }

  label button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  label input {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: transparent !important;
    outline: none;
    border: none;
    color: var(--text-light);
  }
  @media (max-width: 768px) {
    order: 1;
    form {
      padding: 40px 20px;
    }
  }
`;

export const BtnYellow = styled.button`
  padding: 9px 32px;
  background-color: var(--theme-primary);
  color: var(--text-light);
  transition: 0.5s;
  text-decoration: none;
  border-radius: 6px;
  border: 0px;
  font-weight: 700;
  font-size: var(--font-large);
  line-height: 24px;
  &:hover {
    background-color: var(--btn-hover);
  }
`;
