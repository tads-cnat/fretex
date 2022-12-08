import styled from "styled-components";
import { BtnPattern } from "../../../styles"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: #f5f5f5;
    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    h1 {
        font-weight: 600;
        line-height: 32px;
        font-size: var(--font-xxl);
        color: #353535;
        margin: 0 0 30px 0;
    }
`;

export const Seta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5em;
`;

export const Content = styled.div`
    background-color: var(--bg-ligth);
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 20px;
    border-radius: 15px;

`;

export const Content1 = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 2rem;
    div{
        display: flex;
        flex-direction: column;
    }
    img {
        object-fit: cover;
        width: 250px;
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

export const Content2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin: 0 0 30px 0;
`;

export const Content2Info = styled.div`
    display: flex;
    gap: 0.25rem;

    img {
        height: 22px;
        width: 22px;
    }

`;

export const Negotiation = styled.div`
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 15px;
    gap: 2rem;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    row-gap: 1.5em;
    p {
        border-radius: 15px;
        background-color: #E7E7E7;
        color: #7B7B7B;
        padding: 0px 15px 0px 15px;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
    }
    div {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        column-gap: 2rem;
        row-gap: 0.75em;
    }
`;

export const PropostaContainer2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5rem;
    img {
        height: 50px;
        width: 50px;
    }
    p {
        line-height: 18px;
    }
`;

export const AceitaContra = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    gap: 20px;

`;

export const ValorPerfil = styled.div`
    display: flex;
    gap: 10px;
    margin: 0 100px 0 0;
`;

export const BtnGreen = styled(BtnPattern)`
    background-color: #46843C;
    color: #ffffff;
`;

export const BtnYellow = styled(BtnPattern)`
    color: #ffffff;
`;

