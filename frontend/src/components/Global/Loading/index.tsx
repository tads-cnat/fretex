import styled from "styled-components";

interface ILoading {
  color?: string;
  width?: string;
  height?: string;
}

const Loading = ({ color, width, height }: ILoading) => {
  return (
    <LoadingContainer>
      <LoadingStyled color={color} width={width} height={height}>
        <div></div>
        <div></div>
        <div></div>
      </LoadingStyled>
    </LoadingContainer>
  );
};
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const LoadingStyled = styled.div<ILoading>`
  display: inline-block;
  position: relative;
  width: ${(props) => (props.width ? props.width : "80px")};
  height: ${(props) => (props.height ? props.height : "80px")};

  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${(props) =>
      props.color ? props.color : "var(--theme-primary)"};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%,
    100% {
      top: 24px;
      height: 32px;
    }
  }
`;

export default Loading;
