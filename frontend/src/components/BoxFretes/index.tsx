import {
  ContainerMain,
  ContainerInfoBtn,
  ContainerInfos,
  ContainerEndereco,
  End,
  ContainerCalendar,
  ContainerImgMain,
  ContainerImg,
} from './styles';
import caixa from '../../assets/images/caixas.png';
import { type IPedido } from '../../interfaces';
import { formatDate } from '../../utils/formatDate';
import { Button } from '../utils';
import { BsGeoAlt } from 'react-icons/bs';
import { LiaHandshakeSolid } from 'react-icons/lia';
import { RiArrowRightLine, RiCalendarLine } from 'react-icons/ri';

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
              <BsGeoAlt size={24}/>
              <span>{`${pedido.origem.rua}, ${pedido.origem.numero} - ${pedido.origem.bairro}, ${pedido.origem.cidade}/${pedido.origem.estado}`}</span>
            </End>
            <RiArrowRightLine
              size={24}
              style={{ transform: 'rotate(90deg)' }}
            />
            <End>
              <BsGeoAlt size={24}/>
              <span>{`${pedido.destino.rua}, ${pedido.destino.numero} - ${pedido.destino.bairro}, ${pedido.destino.cidade}/${pedido.destino.estado}`}</span>
            </End>
          </ContainerEndereco>
          <ContainerCalendar>
            <RiCalendarLine size={24}/>
            <span>Entregar até {formatDate(pedido.data_entrega)}</span>
          </ContainerCalendar>
        </ContainerInfos>
        <Button link={`/fretes/${pedido.id}`} Icon={LiaHandshakeSolid}>
          Negociar
        </Button>
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
