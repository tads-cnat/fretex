import styled from 'styled-components';
import { ReactComponent as TruckLoading } from '../../../assets/images/truck-loading.svg';

interface ILoading {
  color?: string;
  width?: string;
  height?: string;
  svgWidth?: string;
  fontsize?: string;
  fontweight?: string;
}

export const Loading = ({
  color,
  width,
  height,
  svgWidth,
  fontsize,
  fontweight,
}: ILoading): JSX.Element => {
  return (
    <LoadingStyled
      color={color}
      width={width}
      height={height}
      fontsize={fontsize}
      fontweight={fontweight}
    >
      <TruckLoading style={{ width: svgWidth ?? '80px', height: svgWidth ?? '80px', margin: '10px' }} />
      <p>Carregando...</p>
    </LoadingStyled>
  );
};

const LoadingStyled = styled.div<ILoading>`
  position: relative;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  svg {
    position: absolute;
    animation: driving-truck 4s infinite forwards;
    animation-delay: 1s;
  }
  p {
    color: ${({ color }) => color ?? 'var(--text-light)'};
    font-size: ${({ fontsize }) => fontsize ?? 'var(--font-medium)'};
    font-weight: ${({ fontweight }) => fontweight ?? '500'};
  }

  @keyframes driving-truck {
    0% {
      left: 0%;
    }
    40% {
      left: 45%;
    }
    60% {
      left: 44%;
    }
    100% {
      left: 100%;
    }
  }
`;
