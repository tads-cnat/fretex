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
  gap: 4rem;
  padding: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Logos = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const FooterRodaPe = styled.p`
  color: var(--text-grey-2);
`;

export const FooterBoxLogo = styled.div``;

export const FooterBoxInfo = styled.div``;


export const ImgLink = styled.img`
    transition: 0.5s;
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

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

interface InterfaceInfo {
  border?: string;
  marginBottom?: string;
  padding?: string;
}

export const Info = styled.p<InterfaceInfo>`
  border-bottom: ${(props) => props?.border};
  margin-bottom: ${(props) => props?.marginBottom};
  padding: ${(props) => props?.padding};
  font-size: var(--font-medium);
  color: var(--text-grey-1);
`;
