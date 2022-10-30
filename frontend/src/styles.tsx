import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --theme-primary: #F6AD08;

    --bg-ligth: #FFFFFF;
    --bg-dark: #000000;

    --text-dark: #111111;
    --text-grey-1:#D7D7D7;
    --text-grey-2:#595959;
    --text-brown: #332200;
    --text-light: #FFFFFF;

    --btn-text-color1: #332200;
    --btn-hover: #b1800e;
    
    --font-small: .75rem;
    --font-medium: 1rem;
    --font-large: 1.5rem;
    --font-xl: 2rem;
    --font-xxl: 3.125rem;
  }

  @media (max-width: 768px) {
    :root {
      --font-small: .6rem;
      --font-medium: .75rem;
      --font-large: 1.125rem;
      --font-xl: 1.275rem;
      --font-xxl: 2rem;
    }
  }

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`;

export const StyledApp = styled.div``;

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const SpanYellow = styled.span`
  color: var(--theme-primary);
`;
