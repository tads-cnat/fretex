import { createContext } from "react";
import { ICliente, IFreteiro } from "../../interfaces";

interface IAuthContextType {
  user: ICliente | IFreteiro | null;
  signin: (email: string, password: string) => Promise<boolean>;
  registerFreteiro: (freteiro: IFreteiro) => void;
  registerCliente: (cliente: ICliente) => void;
  signout: () => void;
}

export const AuthContext = createContext<IAuthContextType>(null!);
