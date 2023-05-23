import { useContext } from 'react';
import Login from '../../pages/Login';
import { AuthContext } from './AuthContext';
import LoadingPage from '../../components/Global/LoadingPage';

const RequireAuth = ({
  children,
  level,
}: {
  children: JSX.Element;
  level?: number;
}): JSX.Element => {
  const { user, typeUser, isLoadingUser } = useContext(AuthContext);

  if (isLoadingUser) return <LoadingPage />;
  else if (user !== null && (level === 3 || typeUser === level))
    return children;
  else return <Login />;
};

export default RequireAuth;
