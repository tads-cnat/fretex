import styled from "styled-components";



export const ContainerBg = styled.div`
    background-color: var(--bg-grey3);
    height: 95vh;
`;

export const ContainerMain = styled.div`
    background-color: var(--bg-grey3);
    display: flex;
    column-gap: 20px;
    row-gap: 24px;
    flex-wrap: wrap;
`;

export const Search = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--bg-ligth);
    border-radius: 5px;
    padding: 5px;
    margin-bottom: 15px;
    input {
        border: none;
        outline: none;
    }
`;

