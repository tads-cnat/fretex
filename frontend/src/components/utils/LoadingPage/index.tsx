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
        backgroundColor: '#FFFFFF',
      }}
    >
      <Loading color="#F6AD08" svgWidth="70%" />
    </div>
  );
};
