import Loading from '../Loading';

const LoadingPage = (): JSX.Element => {
  return (
    <div
      style={{
        height: '80vh',
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
