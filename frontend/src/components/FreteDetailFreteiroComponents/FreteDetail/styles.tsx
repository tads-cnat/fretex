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
    h3 {
        font-weight: 600;
        font-size: var(--font-xl);
        color: #353535;
    }
    .userLink{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 5px;
        img {
            width: 25px;
            border-radius: 50%;
        }
        span {
            color: #787878;
            font-size: var(--font-small);
            font-weight: 500;
            transition: .3s;
        }
        span:hover {
            color: var(--btn-hover)
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





export const BtnGreen = styled(BtnPattern)`
    background-color: #46843C;
    color: #ffffff;
`;

export const BtnYellow = styled(BtnPattern)`
    color: #ffffff;
`;

