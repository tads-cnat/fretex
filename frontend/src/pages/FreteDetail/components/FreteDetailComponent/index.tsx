import {
  Container,
  Content,
  Negotiation,
  Content1,
  Content2,
  Content2Info,
} from './styles';
import caixas from '../../../../assets/images/caixas.png';
import perfil from '../../../../assets/images/perfil.svg';
import { ReactComponent as Arrowleft } from '../../../../assets/images/arrow-left-circle.svg';
import geoalt from '../../../../assets/images/geo-alt.svg';
import info from '../../../../assets/images/info-circle.svg';
import { Link, useNavigate } from 'react-router-dom';
import {
  type ICliente,
  type IFreteiro,
  type IPedido,
  type IProposta,
} from '../../../../interfaces';
import { Seta } from '../../../RegisterFrete/components/Form/styles';
import { NegotiationComponent, Loading } from '../../../../components';
import TipoVeiculoService from '../../../../services/TipoVeiculoService';
import { useQuery } from 'react-query';
import { formatDate } from '../../../../utils/formatDate';

const formatCEP = (cep: string) => {
  return `${cep.substring(0, 5)}-${cep.substring(5)}`;
};

interface IFreteDetail {
  pedido: IPedido;
  clientePedido: ICliente;
  actualUser: IFreteiro | ICliente;
  propostas: IProposta[];
}

const formatTurno = (turno: string): string => {
  switch (turno) {
    case 'TA':
      return 'Tarde';
    case 'MA':
      return 'Manhã';
    case 'NO':
      return 'Noite';
    default:
      return 'Turno não informado';
  }
};

export const FreteDetailComponent = ({
  pedido,
  clientePedido,
  actualUser,
  propostas,
}: IFreteDetail): JSX.Element => {
  const navigate = useNavigate();

  const { data: tipoVeiculos, isLoading: isLoadingTipoVeiculos } = useQuery(
    ['tiposVeiculo'],
    async () => await TipoVeiculoService.getAll(),
  );

  const filteredArray =
    !isLoadingTipoVeiculos &&
    tipoVeiculos.data.filter((element: any) =>
      pedido.tipo_veiculo.includes(element.id),
    );

  if (isLoadingTipoVeiculos) return <Loading />;
  return (
    <Container>
      <div>
        <h1>Detalhes de frete</h1>
        <Seta
          onClick={() => {
            navigate(-1);
          }}
        >
          <Arrowleft /> Voltar
        </Seta>
      </div>
      <Content>
        <Content1>
          {pedido.produto?.imagem_url !== null ? (
            <img src={pedido.produto.imagem_url} alt="caixas" />
          ) : (
            <img src={caixas} alt="caixas" />
          )}
          <div>
            <Link to={`/perfil/${pedido.cliente}`} className="userLink">
              {clientePedido?.url_foto !== null ? (
                <img
                  src={clientePedido.url_foto}
                  alt={clientePedido.first_name}
                />
              ) : (
                <img src={perfil} alt={clientePedido?.first_name} />
              )}

              <span>
                {pedido?.cliente_first_name} {pedido.cliente_last_name}
              </span>
            </Link>
            <h3>{pedido?.produto.nome}</h3>
            <p>Pedido realizado em: {formatDate(pedido.criado_em)}</p>{' '}
          </div>
        </Content1>
        <Content2>
          <Content2Info>
            <img src={geoalt} alt="localização" />
            <div>
              <h4>Dados de coleta </h4>
              <p>
                <span>CEP:</span> {formatCEP(pedido.origem.CEP)}
              </p>
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
                <span>CEP:</span> {formatCEP(pedido.destino.CEP)}
              </p>
              <p>
                <span>Cidade:</span> {pedido.destino.cidade}
              </p>
              <p>
                <span>Bairro:</span> {pedido.destino.bairro}
              </p>
              <p>
                <span>Rua:</span> {pedido.destino.rua}
              </p>
              <p>
                <span>Número:</span> {pedido.destino.numero}
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
                <span>Tipos de veículos aceitos:</span>{' '}
                {filteredArray.length > 0
                  ? filteredArray.map((p: { descricao: string }, i: number) =>
                      filteredArray.length - 1 === i
                        ? p.descricao
                        : `${p.descricao}/`,
                    )
                  : 'carregando...'}
              </p>
              <p>
                <span>Data máxima de entrega:</span>{' '}
                {formatDate(pedido.data_entrega)}
              </p>
              <p>
                <span>Data de coleta:</span> {formatDate(pedido.data_coleta)}
              </p>
              <p>
                <span>Nome do recebedor:</span> {pedido.nomeDestinatario}
              </p>
              <p>
                <span>bservações:</span>{' '}
                {pedido?.observacao || 'Não possui observações'}
              </p>
            </div>
          </Content2Info>
        </Content2>
      </Content>
      {
        <Negotiation>
          <NegotiationComponent
            actualUser={actualUser}
            pedidoId={pedido.id}
            propostas={propostas}
            ownerPedido={pedido.cliente}
            pedidoVeiculos={pedido.tipo_veiculo}
          />
        </Negotiation>
      }
    </Container>
  );
};
