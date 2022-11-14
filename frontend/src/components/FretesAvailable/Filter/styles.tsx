import styled from "styled-components";


export const ContainerFilter = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: var(--bg-ligth);
    width: 300px;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);

    h2{
        font-size: var(--font-medium);
        margin: 10px 0 10px 0;
    }  

    label {
        display: flex;
        align-items: center;
        font-size: var(--font-medium);
        cursor: pointer;
    }

    input {
        margin: 0 5px 0 0;
        cursor: pointer;
    }

    @media (max-width: 1116px) {

        width: 100%;
        flex-direction: row;
        h2{
            margin: 0 0 5px 0;
        }  
    }
`;

export const TypesVehicles = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    @media (max-width: 1116px) {
        row-gap: 0;
    }
`;

export const PeriodCollect = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;      
    @media (max-width: 1116px) {
        row-gap: 0;
    }         

`;
