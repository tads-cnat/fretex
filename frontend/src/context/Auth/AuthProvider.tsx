import { useState } from "react";
import useApi from "../../hooks/useApi";
import { ICliente, IFreteiro } from "../../interfaces";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<ICliente | IFreteiro | null>(null);
  const api = useApi();

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if (data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const registerCliente = (user:ICliente) => {
    
  };

  const registerFreteiro = (user:IFreteiro) => {

  }

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signin, registerFreteiro, registerCliente, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
