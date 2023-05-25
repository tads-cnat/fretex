import Loading from '../Loading';

const LoadingPage = ({ height }: { height?: string }): JSX.Element => {
  return (
    <div
      style={{
        height: height ?? '80vh',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        alignItems: 'center',
      }}
    >
      <Loading />
    </div>
  );
};

export default LoadingPage;
