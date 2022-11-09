import styled from "styled-components";


export const ContainerMain = styled.div`
    display: flex;
    flex-grow: 1;
    background-color: var(--bg-ligth);
    justify-content: space-between;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    
`;

export const ContainerInfoBtn = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 25px;
`;

export const ContainerInfos = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    max-width: 550px;
    p {
        font-size: var(--font-medium);
    }
    h2 {
        font-size: var(--font-large);
    }
`;

export const ContainerEndereco = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
`;

export const EndColeta = styled.div`
    display: flex;
    gap: 8px;
`;

export const EndEntrega = styled.div`

`;

export const ContainerCalendar = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

export const ContainerImg = styled.img`
    object-fit: cover;
`;

export const BtnYellow = styled.button`
    width: 163px;
    padding: 9px 27px;
    background-color: var(--theme-primary);
    color: var(--text-light);
    transition: 0.5s;
    text-decoration: none;
    border-radius: 6px;
    border: 0px;
    font-size: var(--font-large);
    line-height: 24px;
    &:hover {
        background-color: var(--btn-hover);
    }
`;