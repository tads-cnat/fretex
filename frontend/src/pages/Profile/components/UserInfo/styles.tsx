import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 330px 1fr;
  padding-top: var(--mb-40);

  .bar {
    grid-column: 1/-1;
    background-color: #d9d9d9;
    margin: 15px 0;
    margin-top: 60px;
    display: block;
    height: 3px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 280px 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    .bar {
      margin-top: 20px;
    }
  }
`;

export const ContainerImage = styled.div`
  position: relative;
  .perfil {
    position: absolute;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;
    border: 8px solid #fafafa;
    top: -125px;
    background-color: #d9d9d9;
  }
  @media (max-width: 768px) {
    .perfil {
      width: 200px;
      height: 200px;
      left: 50%;
      transform: translateX(-50%);
      right: auto;
    }
  }
`;

export const Title = styled.h1`
  font-size: var(--font-xl);
`;

export const Content = styled.div`
  .email {
    color: #595959;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
    p,
    h1 {
      text-align: center;

    }
    h1 {
      font-size: medium;
    }
    p {
      font-size: small;
    }
  }
`;
