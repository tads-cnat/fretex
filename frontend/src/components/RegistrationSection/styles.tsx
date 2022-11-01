import styled from "styled-components";
import { Link } from "react-router-dom";

export const RegisterContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media(max-width: 780px){
        grid-template-columns: 1fr
    }
`

interface IRegisterImage {
    img?: string;
}

export const RegisterUser = styled.div<IRegisterImage>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 125px 0;
    position: relative;
    
    &::before{
        width: 100%;
        content: "";
        height: 100%;
        display: block;
        position: absolute;
        background-image: url(${(props) => props.img});
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -1;
        filter: brightness(50%);
        transition: .5s;
    }
    &:hover::before  {
        filter: none;    
    }
`

export const Text = styled.p`
    color: var(--bg-ligth);
    margin-bottom: 20px;
`;

export const Title = styled.h2`
    color: var(--bg-ligth);
    margin-bottom: 10px;
`;

export const RegisterImage = styled.img`
    background-image: url();
`;

