import { Container, Content } from './styles';
import Seta from '../../../assets/images/seta.svg';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { type ICliente, type IFreteiro } from '../../../interfaces';
import { type INavLink } from '../../../interfaces/INavLink';
import { AuthContext } from '../../../context/Auth/AuthContext';
import { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { RiLogoutBoxLine } from 'react-icons/ri';

interface INavUser {
  user: ICliente | IFreteiro;
  active: boolean;
  setActive: () => void;
}

const NavUser = ({ user, active, setActive }: INavUser): JSX.Element => {
  const { signout } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    signout(Navigate);
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
        <FaUserCircle fontSize={'1.75rem'} color={'var(--bg-grey3)'} />
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
          <RiLogoutBoxLine />
          Sair
        </Link>
      </Content>
    </Container>
  );
};

export default NavUser;
