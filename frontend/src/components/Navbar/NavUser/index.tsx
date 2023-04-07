import { Container, Content } from './styles';
import perfil from '../../../assets/images/perfil.svg';
import Seta from '../../../assets/images/seta.svg';
import { Link, NavLink } from 'react-router-dom';
import { type ICliente, type IFreteiro } from '../../../interfaces';
import { toast } from 'react-toastify';
import { type INavLink } from '../../../interfaces/INavLink';

interface INavUser {
  user: ICliente | IFreteiro;
  signout: () => void;
  navigate: (url: string) => void;
  active: boolean;
  setActive: () => void;
}

const NavUser = ({
  user,
  signout,
  navigate,
  active,
  setActive,
}: INavUser): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    signout();
    toast.info('Usuário deslogado!');
    navigate('/');
  };

  return (
    <Container
      onClick={() => {
        setActive();
      }}
      active={active}
    >
      {user.url_foto ? (
        <img src={user.url_foto} alt={user.first_name} className="perfil" />
      ) : (
        <img src={perfil} alt={user.first_name} className="perfil" />
      )}

      <p>{user.first_name}</p>
      <img src={Seta} alt="seta" className="seta" />
      <Content active={active}>
        <NavLink
          to={`/perfil/${user.id}`}
          className={({ isActive }: INavLink) =>
            (isActive ? 'active' : '') + ' links'
          }
        >
          Meu perfil
        </NavLink>
        <Link className="links" to="" onClick={handleClick}>
          Sair
        </Link>
      </Content>
    </Container>
  );
};

export default NavUser;
