import styled from "styled-components";



export const ContainerBg = styled.div`
    background-color: var(--bg-grey3);

`;

export const ContainerMain = styled.div`
    background-color: var(--bg-grey3);
    display: flex;
    row-gap: 24px;
    justify-content: space-between;
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

