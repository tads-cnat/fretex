import styled from 'styled-components';

export const Title = styled.h1`
  color: var(--text-dark);
  font-size: var(--font-xxl);
  text-align: center;
  margin-bottom: var(--mb-20);
`;

export const Description = styled.p`
  color: var(--text-grey-2);
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: var(--mb-80);
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5rem;
  margin-bottom: var(--mb-80);

  @media (max-width: 1200px) {
    gap: 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
