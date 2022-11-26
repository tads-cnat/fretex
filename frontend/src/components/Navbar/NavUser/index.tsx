import { Container, Content } from "./styles";
import perfil from "../../../assets/images/perfil.svg";
import { ICliente, IFreteiro } from "../../../interfaces";
import Seta from "../../../assets/images/seta.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const NavUser = () => {
  const { user, signout } = useContext(AuthContext);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    e.preventDefault();
    signout();
    navigate("/");
  };

  return (
    <Container onClick={() => setActive(!active)} active={active}>
      <img src={perfil} alt={user?.username} className="perfil" />
      <p>{user?.username}</p>
      <img src={Seta} alt="seta" className="seta"/>
      <Content active={active}>
        <button onClick={handleClick}>Sair</button>
      </Content>
    </Container>
  );
};

export default NavUser;
