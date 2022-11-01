import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 780px){
        grid-template-columns: 1fr
    }
`

export const RegisterUser = styled.div`
    text-align: center;
    background-color: gray;
    padding: 80px 0px;
`

export const Text = styled.p`
    color: var(--bg-ligth);
    margin-bottom: 20px;
`;


export const ButtonLink = styled(Link)`
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

export const Title = styled.h2`
    color: var(--bg-ligth);
    margin-bottom: 10px;
`;

export const RegisterImage = styled.img`
    background-image: url();
`;

