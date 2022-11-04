import styled from "styled-components";
import {Link} from "react-router-dom"
import { createGlobalStyle } from "styled-components";
import { IWrapper } from "./interfaces/styledComponents";

export const GlobalStyle = createGlobalStyle`
  :root {
    --theme-primary: #F6AD08;

    
    --bg-grey: #353535;
    --bg-grey2: #282828;
    --bg-grey3: #f5f5f5;
    --bg-ligth: #FFFFFF;
    --bg-dark: #000000;

    --text-dark: #111111;
    --text-grey-1:#D7D7D7;
    --text-grey-2:#595959;
    --text-brown: #332200;
    --text-light: #FFFFFF;

    --boxes-home-page: #FBFBFB;
    --boxes-border-home-page:#D7D7D7;

    --btn-text-color1: #332200;
    --btn-hover: #b1800e;
    
    --font-small: .75rem;
    --font-medium: 1rem;
    --font-large: 1.5rem;
    --font-xl: 2rem;
    --font-xxl: 3.125rem;

    --mb-15: 15px;
    --mb-20: 20px;
    --mb-80: 80px;
  }

  @media (max-width: 768px) {
    :root {
      --font-small: .6rem;
      --font-medium: .75rem;
      --font-large: 1.125rem;
      --font-xl: 1.275rem;
      --font-xxl: 2rem;

      --mb-15: 8px;
      --mb-20: 10px;
      --mb-80: 40px;
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

export const Wrapper = styled.div<IWrapper>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  background-color : ${(props) => (props.bgColor)};
`;

export const SpanYellow = styled.span`
  color: var(--theme-primary);
`;

export const BtnPattern = styled(Link)`
    padding: 9px 32px;
    background-color: var(--theme-primary);
    color: var(--btn-text-color1);
    transition: 0.5s;
    text-decoration: none;
    border-radius: 6px;
    font-size: var(--font-medium);
    font-weight: 500;
    &:hover {
      background-color: var(--btn-hover);
  }
`;
