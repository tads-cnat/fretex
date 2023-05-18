import { useEffect, useState } from 'react';
import { useQueryClient } from 'react-query';
import useApi from '../../hooks/useApi';
import AuthService from '../../services/AuthService';
import FreteiroService from '../../services/FreteiroService';
import ClienteService from '../../services/ClienteService';
import { type ICliente, type IFreteiro } from '../../interfaces';
import { AuthContext } from './AuthContext';
import { toast } from 'react-toastify';
import { type NavigateFunction } from 'react-router-dom';
import { type IResponseValidateToken } from '../../interfaces/IResponseValidateToken';
import { type IResponseSignin } from '../../interfaces/IResponseSignin';

const AuthProvider = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [user, setUser] = useState<IFreteiro | ICliente | null>(null);
  const [typeUser, setTypeUser] = useState<number>(0);
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const client = useQueryClient();
  const api = useApi();

  const signin = (
    email: string,
    password: string,
    Navigate: NavigateFunction,
    setError: (error: string) => void,
  ): void => {
    setError('');
    setIsLoadingUser(true);
    AuthService
      .login({email, password})
      .then((res: IResponseSignin) => {
        const { data } = res;
        setToken(data.token);
        if (data.user.id === data.user.extra_data.freteiro) {
          FreteiroService
            .get(data.user.id)
            .then((resFreteiro) => {
              setIsLoadingUser(false);
              setUser(resFreteiro.data);
              setTypeUser(1);
              toast.success('Login realizado com sucesso!');
              Navigate('/fretesDisponiveis');
            })
            .catch(() => {
              setError(
                'Não foi possível realizar o login, tente novamente mais tarde!',
              );
            });
        } else {
          ClienteService
            .get(data.user.id)
            .then((resCliente) => {
              setIsLoadingUser(false);
              setUser(resCliente.data);
              setTypeUser(2);
              toast.success('Login realizado com sucesso!');
              Navigate('/dashboard');
            })
            .catch(() => {
              setError(
                'Não foi possível realizar o login, tente novamente mais tarde!',
              );
            });
        }
      })
      .catch(() => {
        setError('Usuário e/ou senha incorreto(s)');
        toast.error('Usuário e/ou senha incorreto(s)');
      });
  };

  const validateToken = (): void => {
    const storageToken = localStorage.getItem('authToken');
    if (storageToken === null || storageToken === '') return;

    AuthService
      .ValidateToken()
      .then((res: IResponseValidateToken) => {
        if (res.data.user.id === res.data.user.extra_data.freteiro) {
          FreteiroService
            .get(res.data.user.id)
            .then((res) => {
              setUser(res.data);
              setTypeUser(1);
            })
            .catch(() => {
              setToken('');
            });
        } else {
          ClienteService
            .get(res.data.user.id)
            .then((res) => {
              setUser(res.data);
              setTypeUser(2);
            })
            .catch(() => {
              setToken('');
            });
        }
      })
      .catch(() => {
        setToken('');
      });
  };

  useEffect(() => {
    validateToken();
  }, [localStorage.getItem('authToken')]);

  const signout = (Navigate: NavigateFunction): void => {
    client.getQueryCache().clear();
    AuthService
      .logout()
      .then(() => {
        setToken('');
        setUser(null);
        toast.info('Usuário deslogado!');
        Navigate('/');
      })
      .catch(() => {
        toast.error('Erro ao deslogar, tente novamente!');
      });
  };

  const setToken = (token: string): void => {
    localStorage.setItem('authToken', token);
  };

  return (
    <AuthContext.Provider
      value={{ user, typeUser, isLoadingUser, signin, signout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
