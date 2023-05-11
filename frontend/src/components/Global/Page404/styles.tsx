import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
  background: gray;

  div {
    text-align: center;
  }
`;

export const Section404 = styled.div`
  font-size: ${({ theme }) => theme.font.sizes.xhuge};
  font-family: ${({ theme }) => theme.font.family};
  font-weight: 800;

  span {
    display: inline-block;
    line-height: 0.7;
    position: relative;
    color: ${({ theme }) => theme.colors.primaryColor};
  }

  span > span {
    display: inline-block;
    position: relative;
  }

  span:nth-of-type(1) {
    perspective: 1000px;
    perspective-origin: 500% 50%;
  }

  span > span:nth-of-type(1) {
    transform-origin: 50% 100% 0px;
    transform: rotateX(0);
    animation: easyoutelastic 8s infinite;
  }

  span:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.black};
  }

  span:nth-of-type(3) {
    perspective-origin: 50% 50%;
  }

  span > span:nth-of-type(3) {
    transform-origin: 100% 100% 0px;
    transform: rotate(0deg);
    animation: rotatedrop 8s infinite;
  }
  @keyframes easyoutelastic {
    0% {
      transform: rotateX(0);
    }
    9% {
      transform: rotateX(210deg);
    }
    13% {
      transform: rotateX(150deg);
    }
    16% {
      transform: rotateX(200deg);
    }
    18% {
      transform: rotateX(170deg);
    }
    20% {
      transform: rotateX(180deg);
    }
    60% {
      transform: rotateX(180deg);
    }
    80% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  @keyframes rotatedrop {
    0% {
      transform: rotate(0);
    }
    10% {
      transform: rotate(30deg);
    }
    15% {
      transform: rotate(90deg);
    }
    70% {
      transform: rotate(90deg);
    }
    80% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
