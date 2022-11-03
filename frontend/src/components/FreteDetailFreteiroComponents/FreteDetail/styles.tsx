import styled from "styled-components";
import { BtnPattern } from "../../../styles"

export const Container = styled.div`
    background-color: #f5f5f5;

    span{
        font-weight: 600;
        font-size: 16px;
        line-height: 24px;
        color: #000000;
    }

    h1 {
        margin: 30px 0px 20px 0px;
        font-weight: 600;
        line-height: 32px;
        font-size: var(--font-xxl);
        color: #353535;
    }
`;

export const Content = styled.div`
    background-color: var(--bg-ligth);
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 30px;
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
        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

export const Content2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

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
    margin: 30px;
    padding: 20px;
    border-radius: 15px;
    gap: 2rem;
    div{

    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
        align-items: center;
        gap: 2rem;
    }
`;

export const PropostaContainer2 = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    div{
        display: flex;
        flex-direction: column;
        margin-right: 30px;
    }
    img{
        height: 50px;
        width: 50px;
    }
`;

export const BtnGreen = styled(BtnPattern)`
    background-color: #46843C;
    color: #ffffff;
`;

export const BtnYellow = styled(BtnPattern)`
    color: #ffffff;
`;

