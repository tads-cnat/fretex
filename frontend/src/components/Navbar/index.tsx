import { SpanYellow, Wrapper} from "../../styles";
import { useState } from "react"
import { Nav, Logo, LinksFretes,
  NavContainer, NavbarLinks, BtnLogin,
  ImgDropdown, DropdownContent,DropdownCircle } from "./styles";
import dropdown from "../../assets/images/dropdown.svg";

const Navbar = () => {

  const [dropdownUp, setDropdownUp] = useState(false)

  const handleDropdown = () => {
    if (dropdownUp === false){
      setDropdownUp(true)
    } else {
      setDropdownUp(false)
    }
  }

  return (
    <Nav>
      <Wrapper>
        <NavContainer>
          <Logo>Frete<SpanYellow>X</SpanYellow></Logo>
          <LinksFretes>
            <NavbarLinks to=''>Buscar fretes</NavbarLinks>
            <NavbarLinks to=''>Meus fretes</NavbarLinks>
          </LinksFretes>
          <BtnLogin to=";">
            Login
          </BtnLogin>
          <DropdownCircle onClick={handleDropdown}>
            <ImgDropdown src={dropdown} alt="dropdown"/>
          </DropdownCircle>
          <DropdownContent display={dropdownUp===true ? "flex" : "none"}>
                <NavbarLinks to=''>Buscar fretes</NavbarLinks>
                <NavbarLinks to=''>Meus fretes</NavbarLinks>
                <NavbarLinks to=''>Login</NavbarLinks>
          </DropdownContent>
        </NavContainer>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
