import { Loading } from '../';

export const LoadingPage = ({ height }: { height?: string }): JSX.Element => {
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
