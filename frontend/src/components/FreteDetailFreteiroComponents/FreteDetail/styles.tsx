import styled from "styled-components";
import {BtnPattern} from "../../../styles"

export const Container = styled.div`

`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 30px;
    padding: 20px;
    border: solid;
    border-radius: 15px;

`;

export const Content1 = styled.div`
    display: flex;
    gap: 2rem;
    div{
        display: flex;
        flex-direction: column;
    }
`;

export const Content2 = styled.div`
    display: flex;
    gap: 2rem;

`;

export const Negotiation = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
    padding: 20px;
    border: solid;
    border-radius: 15px;
    gap: 2rem;
    div{

    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
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
`;

