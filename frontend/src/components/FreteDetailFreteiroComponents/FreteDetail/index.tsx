import {
  Container,
  Content,
  Negotiation,
  Content1,
  Content2,
  HeaderContainer,
  PropostaContainer2,
  BtnGreen,
  Content2Info,
  BtnYellow,
  AceitaContra,
  ValorPerfil,
} from "./styles";

import caixas from "../../../assets/images/caixas.png";
import userPhoto from "../../../assets/images/user-circle.svg";
import { ReactComponent as Arrowleft } from "../../../assets/images/arrow-left-circle.svg";
import geoalt from "../../../assets/images/geo-alt.svg";
import info from "../../../assets/images/info-circle.svg";
import { useNavigate } from "react-router-dom";
import { IPedido } from "../../../interfaces";
import { Seta } from "../../RegisterFreteComponents/Form/styles";

const FreteDetailComponent = ({pedido}: {pedido:IPedido | undefined}) => {
  const navigate = useNavigate()

  const formatDate = (initialDate: string | undefined) => {
    const date = initialDate?.replaceAll("-", "/");
    const year = date?.slice(0, 4);
    const day = date?.slice(8);
    const month = date?.slice(4, 8);
    return `${day}${month}${year}`;
  };

  const formatTurno = (turno: string | undefined) => {
    if (turno === "TA") return "Tarde";
    else if (turno === "MA") return "Manhã";
    else if (turno === "NO") return "Noite";
  };

  return (
    <Container>
      <div>
        <h1>Detalhes de frete</h1>
        <Seta onClick={() => navigate(-1)}>
          <Arrowleft /> Voltar
        </Seta>
      </div>
      <Content>
        <Content1>
          {pedido?.produto.imagem_url ? (
            <img src={pedido?.produto.imagem_url} alt="caixas" />
          ) : (
            <img src={caixas} alt="caixas" />
          )}
          <div>
            <p>{pedido?.clienteName}</p>
            <h3>{pedido?.produto.nome}</h3>
            <p>Pedido realizado em: {formatDate(pedido?.data_coleta)}</p>{" "}
            {/* colocar data da realização do pedido*/}
          </div>
        </Content1>
        <Content2>
          <Content2Info>
            <img src={geoalt} alt="localização" />
            <div>
              <h4>Dados de coleta </h4>
              <p>
                <span>Cidade:</span> {pedido?.origem.cidade}
              </p>
              <p>
                <span>Bairro:</span> {pedido?.origem.bairro}
              </p>
              <p>
                <span>Rua:</span> {pedido?.origem.rua}
              </p>
              <p>
                <span>Número:</span> {pedido?.origem.numero}
              </p>
              <p>
                <span>Turno:</span> {formatTurno(pedido?.turno_entrega)}
              </p>
            </div>
          </Content2Info>
          <Content2Info>
            <img src={geoalt} alt="localização" />
            <div>
              <h4>Dados de Entrega </h4>
              <p>
                <span>Cidade:</span> {pedido?.origem.cidade}
              </p>
              <p>
                <span>Bairro:</span> {pedido?.origem.bairro}
              </p>
              <p>
                <span>Rua:</span> {pedido?.origem.rua}
              </p>
              <p>
                <span>Número:</span> {pedido?.origem.numero}
              </p>
              <p>
                <span>Turno:</span> {formatTurno(pedido?.turno_coleta)}
              </p>
            </div>
          </Content2Info>
          <Content2Info>
            <img src={info} alt="info" />
            <div>
              <h4>Informações adicionais </h4>
              <p>
                <span>Data máxima de entrega:</span>{" "}
                {formatDate(pedido?.data_entrega)}
              </p>
              <p>
                <span>Data de coleta:</span> {formatDate(pedido?.data_coleta)}
              </p>
              <p>
                <span>Nome do recebedor:</span> {pedido?.cliente}
              </p>
              <p>
                <span>Observações:</span> {pedido?.observacao}
              </p>
            </div>
          </Content2Info>
        </Content2>
      </Content>

      <Negotiation>
        <HeaderContainer>
          <div>
            <h2>Negociação</h2>
            <p>Aguardando freteiro</p>
          </div>
          <BtnYellow to="/realizar-proposta-freteiro">
            Realizar Proposta
          </BtnYellow>
        </HeaderContainer>
        <PropostaContainer2>
          <ValorPerfil>
            <img src={userPhoto} alt="avatar-user" />
            <div>
              <h3>R$ 270,00</h3>
              <p>feita em: dd/mm/yyyy</p>
            </div>
          </ValorPerfil>
          <AceitaContra>
            <BtnGreen to="/aceitar-proposta-freteiro">Aceitar</BtnGreen>
            <h4>Contraproposta</h4>
          </AceitaContra>
        </PropostaContainer2>
      </Negotiation>
    </Container>
  );
};

export default FreteDetailComponent;
