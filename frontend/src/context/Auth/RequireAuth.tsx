import React, { useContext } from "react";
import LoadingPage from "../../components/Global/LoadingPage";
import Login from "../../pages/Login";
import { AuthContext } from "./AuthContext";

const RequireAuth = ({
  children,
  level,
}: {
  children: JSX.Element;
  level?: number;
}) => {
  const { user, typeUser, isLoadingUser } = useContext(AuthContext);

  if (!user && !isLoadingUser) return <Login />;
  else if (user && level === 3) return children;
  else if (user && typeUser !== level) return <Login />;

  return children;
};

export default RequireAuth;
