import { Button } from '../';
import { Wrapper, SpanYellow } from '../../styles/globalStyles';
import { useContext, useState } from 'react';
import {
  Header,
  Logo,
  LinksFretes,
  NavContainer,
  ButtonMenuContainer,
} from './styles';
import { AuthContext } from '../../context/Auth/AuthContext';
import NavUser from './NavUser';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useToggle } from '../../hooks/useToggle';
import { type INavLink } from '../../interfaces/INavLink';
import { RiUserSharedLine, RiHome2Line, RiLogoutBoxLine } from 'react-icons/ri';
import { FaUserCircle} from 'react-icons/fa';
import {FiUserPlus} from 'react-icons/fi';
import { LiaTruckLoadingSolid } from 'react-icons/lia';
import { LuLayoutDashboard } from 'react-icons/lu';
import {
  BsCartPlus,
  BsGift,
  BsInfoCircle,
} from 'react-icons/bs';

interface INavbar {
  id?: string;
}

export const Navbar = ({ id }: INavbar): JSX.Element => {
  const [dropdownUp, setDropdownUp] = useState<boolean>(false);
  const { user, typeUser, signout } = useContext(AuthContext);
  const { value: active, toggle: setActive } = useToggle();
  const Navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    signout(Navigate);
  };

  return (
    <Header id={id}>
      <Wrapper>
        <NavContainer>
          <div>
            <Logo to="/">
              Frete<SpanYellow>X</SpanYellow>
            </Logo>
          </div>

          <LinksFretes show={dropdownUp}>
            {user == null && (
              <ul>
                <li>
                  <a href="#howWorks">
                    <BsInfoCircle />
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#vantagens">
                    <BsGift />
                    Vantagens
                  </a>
                </li>
                <li>
                  <a href="#registration">
                    <FiUserPlus />
                    Cadastrar-se
                  </a>
                </li>
              </ul>
            )}
            {user != null && typeUser === 1 && (
              <ul>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }: INavLink) =>
                      isActive ? 'active' : ''
                    }
                  >
                    <RiHome2Line />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fretesDisponiveis">
                    <LiaTruckLoadingSolid />
                    Fretes Disponíveis
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/dashboard`}>
                    <LuLayoutDashboard />
                    Dashboard
                  </NavLink>
                </li>
                <li className="linkMobile">
                  <NavLink className="links" to={`/perfil/${user.id}`}>
                    <FaUserCircle />
                    Meu perfil
                  </NavLink>
                </li>
                <li className="linkMobile">
                  <Link className="links" to="/" onClick={handleClick}>
                    <RiLogoutBoxLine />
                    Sair
                  </Link>
                </li>
              </ul>
            )}
            {user != null && typeUser === 2 && (
              <ul>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }: INavLink) =>
                      isActive ? 'active' : ''
                    }
                  >
                    <RiHome2Line />
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cadastroFrete">
                    <BsCartPlus />
                    Cadastrar pedido
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/dashboard`}>
                    <LuLayoutDashboard />
                    Dashboard
                  </NavLink>
                </li>
                <li className="linkMobile">
                  <NavLink className="links" to={`/perfil/${user.id}`}>
                    <FaUserCircle />
                    Meu perfil
                  </NavLink>
                </li>
                <li className="linkMobile">
                  <Link className="links" to="/" onClick={handleClick}>
                    <RiLogoutBoxLine />
                    Sair
                  </Link>
                </li>
              </ul>
            )}
            <div className="containerUser">
              {user !== null ? (
                <NavUser user={user} active={active} setActive={setActive} />
              ) : (
                <Button link="/login" Icon={RiUserSharedLine}>
                  Login
                </Button>
              )}
            </div>
          </LinksFretes>

          <ButtonMenuContainer animation={dropdownUp}>
            <button
              onClick={() => {
                setDropdownUp(!dropdownUp);
              }}
            >
              {user != null && (
                <>
                  {user?.url_foto ? (
                    <img src={user?.url_foto} alt={user?.first_name} />
                  ) : (
                    <FaUserCircle
                      fontSize={'1.75rem'}
                      color={'var(--bg-grey3)'}
                    />
                  )}
                  <p>{user.first_name}</p>
                </>
              )}
              <span></span>
            </button>
          </ButtonMenuContainer>
        </NavContainer>
      </Wrapper>
    </Header>
  );
};
