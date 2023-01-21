import styled from "styled-components";


export const Card = styled.div`
    display: grid;
    margin-top: 20px;
    background-color: var(--bg-ligth);
    grid-template-columns: 1fr 300px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    transition: .3s;

    @media (max-width: 768px) {
        & {
        grid-template-columns: 1fr;
        }
    }
    .ImagemVeiculo {
        max-height: 250px;
        @media (max-width: 768px) {
            order: -1;
            max-height: 300px;
        }
        @media (max-width: 400px) {
            max-height: 150px;
        }
    }
`

export const Informacoes = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 30px;
    padding: 32px;

    .InfoPrincipais {

    }

    img {
        width: 24px;
    }

    .InfoAdicionais {
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        div {
            display: flex;
            align-items: center;
            column-gap: 6px;
        }
    }

    h1 {
        color: var(--text-dark);
        font-size: var(--font-large);
        font-weight: bold;
    }

    h2 {
        color: var(--text-grey-1);
        font-size: var(--font-medium);
        font-weight: normal;
    }
`

export const Img = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
    border-radius: 0 8px 8px 0;
    @media (max-width: 768px) {
        border-radius: 8px 8px 0 0;
        }
`