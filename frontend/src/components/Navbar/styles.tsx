import styled from "styled-components";
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
`;

export const NavbarLinks = styled(Link)`
    text-decoration: none;
    color: var(--bg-ligth);
    font-size: var(--font-medium);
    &:hover {
        color: var(--btn-hover);
    }
`;


