import styled from 'styled-components';

export const Container = styled.label`
  display: block;
  margin-bottom: 16px;

  .label {
    display: inline-block;
    margin-bottom: 4px;
    color: var(--text-light);
    font-size: 14px;
  }

  .required {
    display: inline-block;
    color: var(--theme-primary);
    margin-left: 4px;
  }

  @keyframes animeDown {
    to {
      transform: initial;
      opacity: initial;
    }
  }
`;

export const InputContainer = styled.div<{ $error?: any; }>`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  background: #1b1b1b;
  border-radius: 10px;
  width: 100%;
  border: 2px solid ${({ $error }) => ($error != null ? '#ee5757' : '#1b1b1b')};
  padding: 0 10px;
  transition: 0.5s;

  svg {
    color: #bfbfbf;
    transition: 0.5s;
  }

  &:focus-within svg {
    color: var(--theme-primary);
  }

  &:focus-within {
    border: 2px solid var(--theme-primary);
  }

  & input:focus {
    background-color: transparent !important;
  }

  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: transparent !important;
    outline: none;
    border: none;
    color: var(--text-light);
  }

  input:-webkit-autofill {
    caret-color: white;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #1b1b1b inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
