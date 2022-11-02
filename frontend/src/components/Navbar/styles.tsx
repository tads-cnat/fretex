import styled from "styled-components";
import {BtnPattern } from "../../styles";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    background-color: var(--bg-grey);
    color: var(--text-light);
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

export const Logo = styled.h1`
    font-size: var(--font-xl);
    font-family: "Poppins", sans-serif;
`;

export const LinksFretes = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    @media (max-width: 440px){
        display: none;
    }
`;

export const NavbarLinks = styled(Link)`
    text-decoration: none;
    color: var(--bg-ligth);
    font-size: var(--font-medium);
    &:hover {
        color: var(--btn-hover);
    }
`;

export const BtnLogin = styled(BtnPattern)`
    @media (max-width: 440px){
        display: none;
    }
`;

export const BtnDropdown = styled(BtnPattern)`
    position: relative;
    padding:10px 15px 10px 15px;
    @media (min-width: 440px){
        display: none;
    }
    &:hover div {
        display: flex;
    }
`;

export const DropdownContent = styled.div`
    display: none;
    width: 100%;
    left:0;
    top:40px;
    flex-direction: column;
    position: absolute;
    background-color: var(--bg-grey);
    box-shadow: 0px 8px 16px 0px #000;
    padding: 30px;
    gap: 1rem;
    z-index: 1;
`;


