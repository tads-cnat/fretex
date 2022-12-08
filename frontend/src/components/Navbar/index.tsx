import { BtnPattern, Wrapper, SpanYellow } from "../../styles";
import { useContext, useState } from "react";
import {
  Header,
  Logo,
  LinksFretes,
  NavContainer,
  NavbarLinks,
  ButtonMenuContainer,
} from "./styles";
import { AuthContext } from "../../context/Auth/AuthContext";
import NavUser from "./NavUser";

interface INavbar {
  id?: string;
}

const Navbar = ({ id }: INavbar) => {
  const [dropdownUp, setDropdownUp] = useState<boolean>(false);
  const { user } = useContext(AuthContext);

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
            <div>
              {user !== null ? (
                <NavUser />
              ) : (
                <BtnPattern to="/login">Login</BtnPattern>
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
