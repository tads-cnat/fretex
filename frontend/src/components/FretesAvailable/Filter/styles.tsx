import styled from "styled-components";


export const ContainerFilter = styled.div`
    background-color: var(--bg-ligth);
    width: 300px;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.05);
`;

export const TypesVehicles = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    h2{
        font-size: var(--font-medium);
        margin: 10px 0;
    }
`;

export const PeriodCollect = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    h2{
        font-size: var(--font-medium);
        margin: 10px 0;
    }                 

`;
