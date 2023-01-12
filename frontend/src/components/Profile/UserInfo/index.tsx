import { Container, ContainerImage, Content, Title } from "./styles";
import perfil from "../../../assets/images/perfil.svg";
import { ICliente, IFreteiro } from "../../../interfaces";
import { isFreteiro } from "../../../utils/isFreteiro";

const UserTitle = ({ user }: { user: ICliente | IFreteiro }) => {
  return (
    <Title className="title">
      {user.first_name} {user.last_name}{" "}
      {isFreteiro(user) && `- ${user.endereco.cidade}/${user.endereco.estado}`}
    </Title>
  );
};

const UserInfo = ({ user }: { user: IFreteiro | ICliente }) => {
  return (
    <>
      <Container>
        <ContainerImage>
          {user.url_foto ? (
            <img src={user.url_foto} alt={user.username} className="perfil" />
          ) : (
            <img src={perfil} alt={user.username} className="perfil" />
          )}
        </ContainerImage>
        <Content>
          <UserTitle user={user} />
          <p className="email">{user.email}</p>
        </Content>
        <div className="bar"></div>
      </Container>
    </>
  );
};

export default UserInfo;
