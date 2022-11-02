import { SpanYellow, Wrapper} from "../../styles";
import { Nav, Logo, LinksFretes, NavContainer, NavbarLinks, BtnLogin, BtnDropdown, DropdownContent } from "./styles";

const Navbar = () => {
  return (
    <Nav>
      <Wrapper>
        <NavContainer>
          <Logo>Frete<SpanYellow>X</SpanYellow></Logo>
          <LinksFretes>
            <NavbarLinks to=''>Buscar fretes</NavbarLinks>
            <NavbarLinks to=''>Meus fretes</NavbarLinks>
          </LinksFretes>
          <BtnLogin to="/">
            Login
          </BtnLogin>
          <BtnDropdown to="/">
            Dropdown
            <DropdownContent>
                <NavbarLinks to=''>Buscar fretes</NavbarLinks>
                <NavbarLinks to=''>Meus fretes</NavbarLinks>
                <NavbarLinks to=''>Login</NavbarLinks>
            </DropdownContent>
          </BtnDropdown>
        </NavContainer>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
