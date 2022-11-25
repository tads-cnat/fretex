import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { ICliente, IFreteiro } from "../../interfaces";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<ICliente | IFreteiro | null>(null);
  const api = useApi();

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    console.log(data.data);

    if (data.data.user && data.data.token) {
      setToken(data.data.token);
      setUser(data.data.user);
      setUserStorage(data.data.user);
      return data.data.user.id === data.data.user.extra_data.freteiro;
    }
    return null;
  };

  /* useEffect(() => {
    const validateToken = async () => {
      const storageData = localStorage.getItem('authToken');
      if(storageData) {
        const data = await api.
      }
    }
    validateToken()
  }, [api])*/ // falta endpoint de retorno de usuario atravez do token

  const signout = () => {
    setToken("");
    setUser(null);
  };

  const setToken = (token: string) => {
    localStorage.setItem("authToken", token);
  };

  const setUserStorage = (token: string) => {
    localStorage.setItem("user", token);
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
