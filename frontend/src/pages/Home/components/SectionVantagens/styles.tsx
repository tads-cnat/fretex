import styled from 'styled-components';
import { type IRegisterImage } from '../../../../interfaces/styledComponents';

export const VantagensContainer = styled.section<IRegisterImage>`
  background-color: var(--text-dark);
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-position: bottom 40px left 40px;
  padding: 0 0 30px 0;
  box-shadow: inset 0 2rem white;

  @media (max-width: 1200px) {
    background-position: bottom 40px left 20px;
  }
  @media (max-width: 900px) {
    padding: 0px;
    background-image: none;
    box-shadow: none;
    padding: 0px;
  }
`;

export const VantagensGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
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
  @media (max-width: 900px) {
    &:first-child {
      margin-top: 3rem;
    }
  }
`;

export const VantagensText = styled.p`
  color: var(--theme-primary);
  position: relative;
  display: inline-block;
  font-size: var(--font-large);
  margin-bottom: 40px;

  &::after {
    position: relative;
    content: '';
    width: 100%;
    height: 4px;
    display: block;
    background-color: var(--theme-primary);
  }

  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const VantagensFlex = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 120px;

  div img {
    margin-bottom: 5px;
  }

  div h3 {
    color: var(--text-light);
    font-size: var(--font-large);
    margin-bottom: 10px;
  }

  div p {
    color: #b2b2b2;
    font-size: var(--font-medium);
  }

  @media (max-width: 1200px) {
    gap: 20px;
  }

  @media (max-width: 900px) {
    margin-bottom: 0px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    div img {
      width: 20px;
    }
  }
`;

export const VantagensImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 900px) {
    & {
      display: none;
    }
  }
`;
