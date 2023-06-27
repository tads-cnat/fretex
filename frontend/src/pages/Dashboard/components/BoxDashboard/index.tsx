import { ReactComponent as Min } from '../../../../assets/images/minus-circle.svg';
import { ReactComponent as Max } from '../../../../assets/images/minus-circle-plus.svg';
import { AlertText, Botoes, Box, BoxPedido, Header } from './styles';
import {
  ContainerCalendar,
  ContainerEndereco,
  ContainerInfos,
  End,
} from '../../../../components/BoxFretes/styles';
import { type IPedido } from '../../../../interfaces';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useToggle } from '../../../../hooks/useToggle';
import { Loading } from '../../../../components';
import { AuthContext } from '../../../../context/Auth/AuthContext';
import PedidoService from '../../../../services/PedidoService';
import { useMutation, useQueryClient } from 'react-query';
import { formatDate } from '../../../../utils/formatDate';
import { toast } from 'react-toastify';
import { RiArrowRightLine, RiCalendarLine } from 'react-icons/ri';
import { BsGeoAlt } from 'react-icons/bs';

interface IBoxDashBoard {
  pedidos: IPedido[] | undefined;
  status: string;
  initialToggleValue?: boolean;
  isLoading: boolean;
  isError: boolean;
}

export const BoxDashboard = ({
  pedidos,
  status,
  initialToggleValue,
  isLoading,
  isError,
}: IBoxDashBoard): JSX.Element => {
  const { toggle, value } = useToggle(initialToggleValue);
  const { user } = useContext(AuthContext);
  const client = useQueryClient();

  const [color, setColor] = useState('');
  const changeColor = (status: string): void => {
    switch (status) {
      case 'Em negociação':
        setColor('#FF7B00');
        break;
      case 'Aguardando coleta':
        setColor('#FFBF00');
        break;
      case 'Em trânsito':
        setColor('#00A3FF');
        break;
      case 'Concluído':
        setColor('#2EC34F');
        break;
      case 'Cancelado':
        setColor('#FF0000');
    }
  };

  useEffect(() => {
    changeColor(status);
  }, [status]);

  const deletePedidoMutation = useMutation(
    'pedidosEN',
    async (id: number) => await PedidoService.delete(id),
    {
      onSuccess: () => {
        client
          .refetchQueries('pedidosEN')
          .then(() => {
            toast.success('Pedido excluído com sucesso!');
          })
          .catch(() => {
            toast.error('Houve um erro, tente novamente!');
          });
      },
    },
  );

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ): void => {
    e.preventDefault();
    deletePedidoMutation.mutate(id);
  };

  return (
    <Box>
      <Header status={color}>
        <div>
          <span></span>
          <h1>{status}</h1>
        </div>
        <button className="ShowFretes" onClick={toggle}>
          {value ? <Min /> : <Max />}
        </button>
      </Header>
      {isError && value && (
        <AlertText>Houve um erro, tente novamente!</AlertText>
      )}
      {isLoading && value && <Loading />}
      {!isLoading && pedidos != null && pedidos.length === 0 && value && (
        <AlertText>Não há pedidos</AlertText>
      )}
      {!isLoading &&
        pedidos != null &&
        pedidos.map((pedido) => (
          <BoxPedido key={pedido.id} active={value}>
            <ContainerInfos>
              <p>
                {pedido.cliente_first_name} {pedido.cliente_last_name}
              </p>
              <h2>{pedido.produto.nome}</h2>
              <ContainerEndereco>
                <End>
                  <BsGeoAlt size={'24px'} />
                  <span>{`${pedido.origem.rua}, ${pedido.origem.numero} - ${pedido.origem.bairro}, ${pedido.origem.cidade}/${pedido.origem.estado}`}</span>
                </End>
                <RiArrowRightLine
                  size={'24px'}
                  style={{ transform: 'rotate(90deg)' }}
                />
                <End>
                  <BsGeoAlt size={'24px'} />
                  <span>{`${pedido.destino.rua}, ${pedido.destino.numero} - ${pedido.destino.bairro}, ${pedido.destino.cidade}/${pedido.destino.estado}`}</span>
                </End>
              </ContainerEndereco>
              <ContainerCalendar>
                <RiCalendarLine size={'24px'} />
                <span>Entregar até {formatDate(pedido.data_entrega)}</span>
              </ContainerCalendar>
            </ContainerInfos>
            <Botoes>
              <Link to={`/fretes/${pedido.id}/`}>Visualizar</Link>
              {user?.id === pedido.cliente && pedido.status === 'TR' && (
                <button>Alterar status</button>
              )}
              {user?.id === pedido.cliente && pedido.status === 'EN' && (
                <button
                  className="btnRed"
                  onClick={(e) => {
                    handleDelete(e, pedido.id);
                  }}
                >
                  Excluir pedido
                </button>
              )}
            </Botoes>
          </BoxPedido>
        ))}
    </Box>
  );
};
