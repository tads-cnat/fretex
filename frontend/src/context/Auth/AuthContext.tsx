import { createContext } from "react";
import { type ICliente, type IFreteiro } from "../../interfaces";

interface IAuthContextType {
  user: ICliente | IFreteiro | null;
  isLoadingUser: boolean;
  typeUser: number;
  signin: (email: string, password: string) => Promise<boolean | null>;
  signout: () => void;
  setUser: (user:ICliente |IFreteiro) => void;
}

export const AuthContext = createContext<IAuthContextType>(null!);
