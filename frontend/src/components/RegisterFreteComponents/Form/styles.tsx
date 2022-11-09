import styled from "styled-components";

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

export const Form = styled.form`
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    padding: 24px 24px 24px 24px;

    @media (max-width: 540px) {
        padding: 24px 8px 24px 8px;
    }

    h3 {
        font-style: normal;
        font-weight: 600;
        font-size: var(--font-large);
        line-height: 24px;
    }

    span{
        margin-bottom: 5px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
    }

    input{
        border: 1px solid #DCDCDC;
        border-radius: 4px;
        padding: 8px;
    }

    textarea{
        border: 1px solid #DCDCDC;
        border-radius: 4px;
        padding: 8px;
    }
`;

export const EnderecoDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 10px;
    }

    label {
        display: flex;
        flex-direction: column;
    }
`;

export const ProdutoDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 25px 0px 25px 0px;

    h3{
        padding: 0px 0px 0px 10px;
    }
`;

export const ProdutoDivContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 830px) {
        grid-template-columns: 1fr;
        gap: 0rem;


    }

    div{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 10px;
    }

    label {
        display: flex;
        flex-direction: column;
    }
`;

export const EntregaDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h3{
        padding: 0px 0px 0px 10px;
    }
`;

export const EntregaDivContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media (max-width: 540px) {
        grid-template-columns: 1fr;
    }

    label {
        display: flex;
        flex-direction: column;
    }
    div{
        padding: 10px;
    }
`;

export const BtnYellow = styled.button`
    padding: 9px 32px;
    background-color: var(--theme-primary);
    color: var(--text-light);
    transition: 0.5s;
    text-decoration: none;
    border-radius: 6px;
    border: 0px;
    font-weight: 700;
    font-size: var(--font-large);
    line-height: 24px;
    &:hover {
        background-color: var(--btn-hover);
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 20px 10px 0px 0px;

    @media (max-width: 540px) {
        justify-content: center;
        padding: 20px 0px 0px 0px;
    }
`;
