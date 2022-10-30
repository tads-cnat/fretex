import styled from "styled-components";

export const VantagensContainer = styled.section`
    background-color: var(--text-dark);
    padding: 0 0 80px 0;
    box-shadow: inset 0 2rem white;
`;

export const VantagensGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
`;

export const VantagensWrapper = styled.div`

`;

export const VantagensH1 = styled.h1`
    color: var(--text-light);
    font-size: var(--font-xxl);
    margin-bottom: 32px;

`;

export const VantagensP = styled.p`
    color: #b2b2b2;
    font-size: var(--font-large);
    margin-bottom: 20px;

    &:first-child {
        margin-top: 100px;
    }
`;

export const VantagensText = styled.p`
    color: var(--theme-primary);
    position: relative;
    display: inline-block;
    font-size: var(--font-large);
    margin-bottom: 40px;
    &::after{
        position: relative;
        content: "";
        width: 100%;
        height: 4px;
        display: block;
        background-color: var(--theme-primary);
    }
`;

export const VantagensFlex = styled.div`
    display: flex;
    gap: 40px;
`;

export const VantagemBox = styled.div`

`;

export const VantagensImage = styled.img`
    width: 100%;
    object-fit: cover;
`;