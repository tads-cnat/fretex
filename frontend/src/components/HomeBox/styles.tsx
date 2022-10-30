import styled from "styled-components";

export const Box = styled.div`
  text-align: center;
  background-color: var(--boxes-home-page);
  border: 1px solid var(--boxes-border-home-page);
  padding: 30px;
  border-radius: 20px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 1200px) {
    padding: 15px;
  }
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const BoxWithLines = styled(Box)`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -25%;
    width: 90px;
    background-color: var(--theme-primary);
    height: 20px;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -25%;
    width: 90px;
    background-color: var(--theme-primary);
    height: 20px;
    z-index: -1;
  }
  @media (max-width: 768px) {
    &::before {
      top: 80%;
      left: 48%;
      width: 20px;
      height: 90px;
    }
    &::after {
      top: -20%;
      right: 45%;
      width: 20px;
      height: 90px;
    }
  }
`;

export const Image = styled.img`
  width: 160px;
  @media (max-width: 768px) {
    width: 120px;
  }
`;

export const Title = styled.h2`
  font-size: var(--font-large);
  color: var(--text-dark);
`;

export const Description = styled.p`
  color: var(--text-grey-2);
  font-size: var(--font-medium);
`;
