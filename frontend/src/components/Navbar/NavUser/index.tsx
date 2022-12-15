import { Container, Content } from "./styles";
import perfil from "../../../assets/images/perfil.svg";
import Seta from "../../../assets/images/seta.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useToggle } from "../../../hooks/useToggle";

const NavUser = () => {
  const { user, signout } = useContext(AuthContext);
  const { value: active, toggle: setActive } = useToggle();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    signout();
    navigate("/");
  };

  return (
    <Container onClick={() => setActive()} active={active}>
      {user?.url_foto ? (
        <img src={user?.url_foto} alt={user?.username} className="perfil" />
      ) : (
        <img src={perfil} alt={user?.username} className="perfil" />
      )}

      <p>{user?.username}</p>
      <img src={Seta} alt="seta" className="seta" />
      <Content active={active}>
        <NavLink
          to={`/perfil/${user?.id}`}
          className={({ isActive }) => (isActive ? "active" : "") + ' links' }
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
