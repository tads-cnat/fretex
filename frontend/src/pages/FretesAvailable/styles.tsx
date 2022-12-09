import styled from "styled-components";


export const ContainerBg = styled.div`
    background-color: var(--bg-grey3);
    min-height: 95vh;
    padding-top: 100px;
    padding-bottom: 100px;

    h1 {
        margin-bottom: 80px;
        font-size: var(--font-xxl);
    }   
`;

export const ContainerMain = styled.div`
    display: grid;
    grid-template-columns: 2fr 7fr;
    align-items: flex-start;
    column-gap: 20px;
    row-gap: 15px;
    background-color: var(--bg-grey3);
    @media (max-width:1000px) {
        & {
            grid-template-columns: 1fr;
        }
    }
`;

export const ContainerFretes = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 2;
    row-gap: 20px;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: var(--bg-ligth);
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 15px;
    
    img {
        width: 24px;
    }

    input {
        border: none;
        outline: none;
        width: 100%;
    }
`;

