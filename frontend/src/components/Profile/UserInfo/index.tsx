import { Container, ContainerImage, Content } from "./styles";
import perfil from "../../../assets/images/perfil.svg";
import { ICliente, IFreteiro } from "../../../interfaces";

function isFreteiro(obj: any): obj is IFreteiro {
  return "endereco" in obj;
}

const UserTitle = ({ user }: { user: ICliente | IFreteiro }) => {
  return (
    <h1 className="title">
      {user.username}{" "}
      {isFreteiro(user) && `- ${user.endereco.cidade}/${user.endereco.estado}`}
    </h1>
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
