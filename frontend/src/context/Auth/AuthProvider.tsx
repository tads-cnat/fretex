import { useCallback, useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { ICliente, IFreteiro } from "../../interfaces";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<ICliente | IFreteiro | null>(null);
  const api = useApi();

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);

    if (data.data.user && data.data.token) {
      setToken(data.data.token);
      api.getUser().then((res) => setUser(res.data.user));
      return data.data.user.id === data.data.user.extra_data.freteiro;
    }
    return null;
  };

  const validateToken = async () => {
    const storageToken = localStorage.getItem("authToken");
    if (storageToken) {
      const userData = await api.validateToken(storageToken);
      if (userData.data.user) {
        api.getUser().then((res) => setUser(res.data.user));
      }
    }
  };

  useEffect(() => {
    validateToken();
  }, []);

  const signout = () => {
    setToken("");
    setUser(null);
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
