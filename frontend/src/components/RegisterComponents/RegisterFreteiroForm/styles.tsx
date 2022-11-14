import styled from "styled-components";
import { ContainerContent, ContainerForm, ContainerPrincipal } from "../RegisterClienteForm/styles";

export const ContainerMain = styled(ContainerPrincipal)`
    display: grid;
    grid-template-columns: 3fr 1fr;

    @media (max-width: 1050px) {
        padding-top: 10px;
        grid-template-columns: 2fr;
        gap: 20px;
    }
`;

export const ContainerForm2 = styled(ContainerForm)`

    form {
        display: flex;
        max-width: 100%;
        justify-content: center;
        gap: 50px;
        padding-bottom: 0;

        @media (max-width: 1050px) {
            gap: 50px;
        }

        @media (max-width: 768px) {
            flex-wrap: wrap;
        }
    }
`;

export const RegisterPerson = styled.div`
    max-width: 100%;
    @media (max-width: 1050px) {
            min-width: 200px;
        }
`;

export const PerfilImg = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 150px;
    }
`;

export const RegisterAddress = styled.div`
    max-width: 350px;
    Button {
        margin-top: 30px
    }
    @media (max-width: 1050px) {
            min-width: 200px;
    }
`;

export const Login = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    color: var(--text-grey-1);
    margin-bottom: 80px;
`;

export const ContainerInfos = styled(ContainerContent)`
    @media (max-width: 1050px) {
            order: -1;
            div {
                
                padding-left: 0px;
                border: none;
            }
        }   
`;


export const BtnYellow = styled.button`
    cursor: pointer;
    padding: 9px 32px;
    background-color: var(--theme-primary);
    color: var(--text-light);
    transition: 0.5s;
    text-decoration: none;
    border-radius: 6px;
    border: 0px;
    font-weight: 700;
    font-size: var(--font-medium);
    line-height: 24px;
    &:hover {
        background-color: var(--btn-hover);
    }
`;