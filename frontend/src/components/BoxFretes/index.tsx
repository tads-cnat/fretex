import {
  ContainerMain,
  ContainerInfoBtn,
  ContainerInfos,
  ContainerEndereco,
  End,
  Seta,
  ContainerCalendar,
  ContainerImgMain,
  ContainerImg,
} from './styles';
import caixa from '../../assets/images/caixas.png';
import Loc from '../../assets/images/geo-alt.svg';
import Arrow from '../../assets/images/arrow-right.svg';
import Calendar from '../../assets/images/calendar.svg';
import { type IPedido } from '../../interfaces';
import { formatDate } from '../../utils/formatDate';
import { Button } from '../utils';

export const BoxFretes = ({ pedido }: { pedido: IPedido }): JSX.Element => {
  return (
    <ContainerMain>
      <ContainerInfoBtn>
        <ContainerInfos>
          <p>
            {pedido.cliente_first_name} {pedido.cliente_last_name}
          </p>
          <h2>{pedido.produto.nome}</h2>
          <ContainerEndereco>
            <End>
              <img src={Loc} alt="Localização" />
              <span>{`${pedido.origem.rua}, ${pedido.origem.numero} - ${pedido.origem.bairro}, ${pedido.origem.cidade}/${pedido.origem.estado}`}</span>
            </End>
            <Seta src={Arrow} alt="Seta" />
            <End>
              <img src={Loc} alt="Localização" />
              <span>{`${pedido.destino.rua}, ${pedido.destino.numero} - ${pedido.destino.bairro}, ${pedido.destino.cidade}/${pedido.destino.estado}`}</span>
            </End>
          </ContainerEndereco>
          <ContainerCalendar>
            <img src={Calendar} alt="Calendária" />
            <span>Entregar até {formatDate(pedido.data_entrega)}</span>
          </ContainerCalendar>
        </ContainerInfos>
        <Button link={`/fretes/${pedido.id}`}>Negociar</Button>
      </ContainerInfoBtn>
      <ContainerImgMain>
        {pedido.produto.imagem_url ? (
          <ContainerImg src={pedido.produto.imagem_url} alt="caixas" />
        ) : (
          <ContainerImg src={caixa} alt="caixas" />
        )}
      </ContainerImgMain>
    </ContainerMain>
  );
};
