import { useContext } from 'react';
import Login from '../../pages/Login';
import { AuthContext } from './AuthContext';

const RequireAuth = ({
  children,
  level,
}: {
  children: JSX.Element;
  level?: number;
}): JSX.Element => {
  const { user, typeUser, isLoadingUser } = useContext(AuthContext);

  if (user == null && !isLoadingUser) return <Login />;
  else if (user != null && level === 3) return children;
  else if (user != null && typeUser !== level) return <Login />;

  return children;
};

export default RequireAuth;
