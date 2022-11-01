import React from "react";
import { SpanYellow, Wrapper } from "../../styles";
import { Nav, Logo, LinksFretes, NavContainer, NavbarLinks } from "./styles";

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

        </NavContainer>
      </Wrapper>
    </Nav>
  );
};

export default Navbar;
