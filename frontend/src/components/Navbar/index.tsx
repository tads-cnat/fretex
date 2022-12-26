import { Wrapper, SpanYellow } from "../../styles";
import { useContext, useState } from "react";
import {
  Header,
  Logo,
  LinksFretes,
  NavContainer,
  ButtonMenuContainer,
  BtnPatternLogin,
} from "./styles";
import { AuthContext } from "../../context/Auth/AuthContext";
import NavUser from "./NavUser";
import { Link, NavLink, useNavigate } from "react-router-dom";
import perfil from "../../assets/images/perfil.svg";
import { useToggle } from "../../hooks/useToggle";

interface INavbar {
  id?: string;
}

const Navbar = ({ id }: INavbar) => {
  const [dropdownUp, setDropdownUp] = useState<boolean>(false);
  const { user, typeUser, signout } = useContext(AuthContext);
  const { value: active, toggle: setActive } = useToggle();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signout();
    navigate("/");
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
            {!user && (
              <ul>
                <li>
                  <a href="#howWorks">Como funciona</a>
                </li>
                <li>
                  <a href="#vantagens">Vantagens</a>
                </li>
                <li>
                  <a href="#registration">Cadastrar-se</a>
                </li>
              </ul>
            )}
            {user && typeUser === 1 && (
              <ul>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/fretesDisponiveis">Fretes Disponíveis</NavLink>
                </li>
                <li>
                  <NavLink to={`/dashboard/${user.id}`}>Dashboard</NavLink>
                </li>
                <li className="linkMobile">
                  <NavLink
                    className="links"
                    to={`/perfil/${user.id}`}
                  >
                    Meu perfil
                  </NavLink>
                </li>
                <li className="linkMobile">
                  <Link
                    className="links"
                    to="/"
                    onClick={handleClick}
                  >
                    Sair
                  </Link>
                </li>
              </ul>
            )}
            {user && typeUser === 2 && (
              <ul>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/cadastroFrete">Cadastrar pedido</NavLink>
                </li>
                <li>
                  <NavLink to={`/dashboard/${user.id}`}>Dashboard</NavLink>
                </li>
                <li className="linkMobile">
                  <NavLink
                    className="links"
                    to={`/perfil/${user.id}`}
                  >
                    Meu perfil
                  </NavLink>
                </li>
                <li className="linkMobile">
                  <Link
                    className="links"
                    to="/"
                    onClick={handleClick}
                  >
                    Sair
                  </Link>
                </li>
              </ul>
            )}
            <div className="containerUser">
              {user !== null ? (
                <NavUser
                  user={user}
                  signout={signout}
                  navigate={navigate}
                  active={active}
                  setActive={setActive}
                />
              ) : (
                <BtnPatternLogin to="/login">Login</BtnPatternLogin>
              )}
            </div>
          </LinksFretes>

          <ButtonMenuContainer animation={dropdownUp}>
            <button onClick={() => setDropdownUp(!dropdownUp)}>
              {user && (
                <>
                  {user?.url_foto ? (
                    <img src={user?.url_foto} alt={user?.first_name} />
                  ) : (
                    <img src={perfil} alt={user?.first_name} />
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

export default Navbar;
