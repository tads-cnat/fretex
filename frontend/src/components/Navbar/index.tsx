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
import { NavLink } from "react-router-dom";

interface INavbar {
  id?: string;
}

const Navbar = ({ id }: INavbar) => {
  const [dropdownUp, setDropdownUp] = useState<boolean>(false);
  const { user, typeUser } = useContext(AuthContext);

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
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/fretes-disponiveis'>Fretes Disponíveis</NavLink>
                </li>
              {/**   <li>
               <NavLink to='/meusFretes'>Meus fretes</NavLink> 
                </li>*/}
              </ul>
            )}
            {user && typeUser === 2 && (
              <ul>
                <li>
                  <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? 'active' : '')}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                <NavLink to='/cadastro-frete'>Cadastrar pedido</NavLink>
                </li>
             {/**   <li>
                <NavLink to='/meusFretes'>Meus fretes</NavLink>
                </li> */}
              </ul>
            )}
            <div className="containerUser">
              {user !== null ? (
                <NavUser />
              ) : (
                <BtnPatternLogin to="/login">Login</BtnPatternLogin>
              )}
            </div>
          </LinksFretes>

          <ButtonMenuContainer animation={dropdownUp}>
            <button onClick={() => setDropdownUp(!dropdownUp)}>
              Menu
              <span></span>
            </button>
          </ButtonMenuContainer>
        </NavContainer>
      </Wrapper>
    </Header>
  );
};

export default Navbar;
