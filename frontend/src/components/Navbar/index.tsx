import { BtnPattern, Wrapper, SpanYellow } from "../../styles";
import { useState } from "react";
import {
  Header,
  Logo,
  LinksFretes,
  NavContainer,
  NavbarLinks,
  ButtonMenuContainer,
} from "./styles";

interface INavbar {
  id?: string;
}

const Navbar = ({ id }: INavbar) => {
  const [dropdownUp, setDropdownUp] = useState<boolean>(false);

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
              <BtnPattern to="/login">Login</BtnPattern>
              {/* colocar perfil do usuário*/}
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
