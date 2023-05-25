import { createContext } from 'react';
import { type ICliente, type IFreteiro } from '../../interfaces';
import { type NavigateFunction } from 'react-router-dom';

interface IAuthContextType {
  user: ICliente | IFreteiro | null;
  isLoadingUser: boolean;
  typeUser: number;
  signin: (
    email: string,
    password: string,
    Navigate: NavigateFunction,
    setError: (error: string) => void,
  ) => void;
  signout: (Navigate: NavigateFunction) => void;
  setUser: (user: ICliente | IFreteiro) => void;
}

export const AuthContext = createContext<IAuthContextType>(null!);
