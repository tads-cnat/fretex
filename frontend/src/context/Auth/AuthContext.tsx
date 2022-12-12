import { createContext } from "react";
import { ICliente, IFreteiro } from "../../interfaces";

interface IAuthContextType {
  user: ICliente | IFreteiro | null;
  typeUser: number;
  signin: (email: string, password: string) => Promise<boolean | null>;
  signout: () => void;
}

export const AuthContext = createContext<IAuthContextType>(null!);
