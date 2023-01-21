import styled from "styled-components";
import { InputLabelStyles } from ".";

export const InputLabel = styled.label<InputLabelStyles>`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#1b1b1b"};
  border-radius: 10px;
  width: 100%;
  border: 2px solid #1b1b1b;
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
  input:focus {
    background-color: transparent !important;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  input {
    width: 100%;
    height: 100%;
    padding: 10px;
    
    color: ${(props) => (props.color ? props.color : "#000")};
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

  input[type="text"]:disabled {
    cursor: not-allowed;
  }

  &:has(input[type="text"]:disabled) {
    opacity: 0.8;
  }
`;

export const LabelContainer = styled.div`
  margin-bottom: 5px;

  .error {
    color: #ee5757;
    display: inline-block;
    font-size: var(--font-small);
    text-align: left;
  }
`;
