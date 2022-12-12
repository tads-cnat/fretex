import { Container, Content } from "./styles";
import perfil from "../../../assets/images/perfil.svg";
import Seta from "../../../assets/images/seta.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const NavUser = () => {
  const { user, signout } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const width = window.screen.width;

  const handleClick = (e: any) => {
    e.preventDefault();
    signout();
    navigate("/");
  };

  useEffect(() => {
    if (width <= 768) setActive(true)
  }, [width]);

  return (
    <Container
      onClick={() => setActive(!active)}
      active={active}
    >
      {user?.url_foto ? (
        <img src={user?.url_foto} alt={user?.username} className="perfil" />
      ) : (
        <img src={perfil} alt={user?.username} className="perfil" />
      )}

      <p>{user?.username}</p>
      <img src={Seta} alt="seta" className="seta" />
      <Content active={active}>
        <Link className="links" to="" onClick={handleClick}>
          Sair
        </Link>
     {/**   <Link className="links" to="" onClick={handleClick}>
          Sair 
        </Link>*/}
      </Content>
    </Container>
  );
};

export default NavUser;
