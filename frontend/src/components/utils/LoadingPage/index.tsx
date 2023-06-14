import { Loading } from '../';

export const LoadingPage = ({ height }: { height?: string }): JSX.Element => {
  return (
    <div
      style={{
        height: height ?? '100vh',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
        backgroundColor: '#c4c4c4',
      }}
    >
      <Loading
        color="var(--text-light)"
        fontsize="4rem"
        fontweight="700"
        svgWidth="500px"
      />
    </div>
  );
};
