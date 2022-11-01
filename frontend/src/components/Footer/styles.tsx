import styled from "styled-components";

export const FinalFooterContainer = styled.section`
  background-color: var(--bg-grey2);
  padding: 25px 0;
`;

export const FooterContainer = styled.section`
  background-color: var(--bg-grey);
`;

export const FooterStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Logos = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 64px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const FooterRodaPe = styled.p`
  color: var(--text-grey-2);
`;

export const FooterBoxLogo = styled.div``;

export const FooterBoxInfo = styled.div``;

export const Logo = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: var(--font-xxl);
  color: var(--text-light);
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-size: var(--font-large);
  color: var(--text-light);

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

export const Info = styled.p`
  font-size: var(--font-medium);
  color: var(--text-grey-1);
`;
