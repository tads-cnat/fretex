import styled from "styled-components";

export const Title = styled.p`
    margin-top: 60px;
    font-size: var(--font-xxl);
    font-weight: 600;
    color: var(--text-grey-2);
`;

export const Filter = styled.div`
    margin-top: 40px;
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
        color: var(--text-grey-1);
        font-size: var(--font-large);
        font-weight: 500;
    }

    div {
        display: flex;
        column-gap: 16px;
        .concluidos {
                color: var(--theme-primary);
                font-size: var(--font-medium);
                font-weight: 600;
                background-color: transparent;
                border: none;
                cursor: pointer;
                &:hover {
                    transition: 0.5s;
                    color: var(--btn-hover);
                }
            }
    }

    @media (max-width: 920px){
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;

        div {
            width: 100%;
            justify-content: space-between;
        }
    }
`;

export const BtnYellow = styled.button`
    cursor: pointer;
    padding: 8px 16px;
    background-color: var(--theme-primary);
    color: var(--text-light);
    transition: 0.5s;
    text-decoration: none;
    border-radius: 6px;
    border: 0px;
    font-weight: 600;
    font-size: var(--font-medium);
    line-height: 24px;
    &:hover {
        background-color: var(--btn-hover);
    }
`;

export const ContainerPedidos = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 30px;
    margin-bottom: 30px;

    .containers {
        display: flex;
        flex-direction: column;
        row-gap: 30px;
    }

    @media (max-width: 920px){
        grid-template-columns: 1fr;
        row-gap: 30px;
    }
`

