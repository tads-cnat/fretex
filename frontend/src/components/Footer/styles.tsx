import styled from "styled-components";

export const FooterStyled = styled.footer`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 5rem;
    background-color: var(--bg-grey);

    @media (max-width: 1200px) {
        gap: 2rem;
  }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        justify-items: center;
  }
`;

export const FooterContainer = styled.footer`

`;

export const Logos = styled.footer`
    margin-top: 64px;
    display: flex;
    align-items: center;
    gap: 1.5rem;

`;

export const FooterRodaPe = styled.footer`
    display: flex;
    align-items: center;
    justify-content: left;
    padding-left: 207px;
    color: var(--text-grey-2);
    background-color: var(--bg-grey2);
`;

export const FooterBoxLogo = styled.footer`

`;

export const FooterBoxInfo = styled.footer`


`;

export const ImgLink = styled.img`
    &:hover{
        opacity: 0.5;
    }
`;

export const Logo = styled.h1`
    font-family: "Poppins", sans-serif;
    font-size: var(--font-xxl);
    color: var(--text-light);
`;

export const Title = styled.h2`
    margin-bottom: 32px;
    font-size: var(--font-large);
    color: var(--text-light);
`;

export const Info = styled.p`
    font-size: var(--font-medium);
    color: var(--text-grey-1);
`;