import styled from 'styled-components';
import { ReactComponent as SpinnerLoading } from '../../../assets/images/OrangeLoadingSpinner.svg';

interface ILoading {
  color?: string;
  width?: string;
  height?: string;
  svgWidth?: string;
}

export const Loading = ({
  color,
  width,
  height,
  svgWidth,
}: ILoading): JSX.Element => {
  return (
    <LoadingStyled
      width={width}
      height={height}
      svgWidth={svgWidth}
      color={color}
    >
      <SpinnerLoading />
    </LoadingStyled>
  );
};

const LoadingStyled = styled.div<ILoading>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  svg {
    width: ${({ svgWidth }) => svgWidth ?? '80px'};
    height: ${({ svgWidth }) => svgWidth ?? '80px'};
    circle {
      stroke: ${({ color }) => color ?? '#FFFFFF'};
    }
  }
`;
