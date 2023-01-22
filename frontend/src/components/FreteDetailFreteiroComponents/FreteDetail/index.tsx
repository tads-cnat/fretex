import {
  Container,
  Content,
  Negotiation,
  Content1,
  Content2,
  BtnGreen,
  Content2Info,
  BtnYellow,
} from "./styles";

import caixas from "../../../assets/images/caixas.png";
import perfil from "../../../assets/images/perfil.svg";
import { ReactComponent as Arrowleft } from "../../../assets/images/arrow-left-circle.svg";
import geoalt from "../../../assets/images/geo-alt.svg";
import info from "../../../assets/images/info-circle.svg";
import { Link, useNavigate } from "react-router-dom";
import { ICliente, IFreteiro, IPedido, IProposta } from "../../../interfaces";
import { Seta } from "../../RegisterFreteComponents/Form/styles";
import NegociationComponent from "../NegociationComponent";

interface IFreteDetail {
  pedido: IPedido;
  clientePedido: ICliente;
  actualUser: IFreteiro | ICliente;
  propostas: IProposta[];
}

const FreteDetailComponent = ({
  pedido,
  clientePedido,
  actualUser,
  propostas,
}: IFreteDetail) => {
  const navigate = useNavigate();

  const formatDate = (initialDate: string) => {
    const date = initialDate.replaceAll("-", "/");
    const year = date.slice(0, 4);
    const day = date.slice(8);
    const month = date.slice(4, 8);
    return `${day}${month}${year}`;
  };

  const formatTurno = (turno: string) => {
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
          {pedido.produto?.imagem_url ? (
            <img src={pedido?.produto?.imagem_url} alt="caixas" />
          ) : (
            <img src={caixas} alt="caixas" />
          )}
          <div>
            <Link to={`/perfil/${pedido.cliente}`} className="userLink">
              {clientePedido.url_foto ? (
                <img
                  src={clientePedido.url_foto}
                  alt={clientePedido.first_name}
                />
              ) : (
                <img src={perfil} alt={clientePedido.first_name} />
              )}

              <span>
                {pedido.cliente_first_name} {pedido.cliente_last_name}
              </span>
            </Link>
            <h3>{pedido.produto.nome}</h3>
            <p>Pedido realizado em: {formatDate(pedido.criado_em)}</p>{" "}
          </div>
        </Content1>
        <Content2>
          <Content2Info>
            <img src={geoalt} alt="localização" />
            <div>
              <h4>Dados de coleta </h4>
              <p>
                <span>Cidade:</span> {pedido.origem.cidade}
              </p>
              <p>
                <span>Bairro:</span> {pedido.origem.bairro}
              </p>
              <p>
                <span>Rua:</span> {pedido.origem.rua}
              </p>
              <p>
                <span>Número:</span> {pedido.origem.numero}
              </p>
              <p>
                <span>Turno:</span> {formatTurno(pedido.turno_entrega)}
              </p>
            </div>
          </Content2Info>
          <Content2Info>
            <img src={geoalt} alt="localização" />
            <div>
              <h4>Dados de Entrega </h4>
              <p>
                <span>Cidade:</span> {pedido.origem.cidade}
              </p>
              <p>
                <span>Bairro:</span> {pedido.origem.bairro}
              </p>
              <p>
                <span>Rua:</span> {pedido.origem.rua}
              </p>
              <p>
                <span>Número:</span> {pedido.origem.numero}
              </p>
              <p>
                <span>Turno:</span> {formatTurno(pedido.turno_coleta)}
              </p>
            </div>
          </Content2Info>
          <Content2Info>
            <img src={info} alt="info" />
            <div>
              <h4>Informações adicionais </h4>
              <p>
                <span>Data máxima de entrega:</span>{" "}
                {formatDate(pedido.data_entrega)}
              </p>
              <p>
                <span>Data de coleta:</span> {formatDate(pedido.data_coleta)}
              </p>
              <p>
                <span>Nome do recebedor:</span> {pedido.nomeDestinatario}
              </p>
              <p>
                <span>Observações:</span> {pedido.observacao}
              </p>
            </div>
          </Content2Info>
        </Content2>
      </Content>

      <Negotiation>
        <NegociationComponent actualUser={actualUser} pedidoId={pedido.id} propostas={propostas} />
      </Negotiation>
    </Container>
  );
};

export default FreteDetailComponent;
