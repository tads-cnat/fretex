import { BoxDashboard } from './components';
import { Layout, SEO, Button } from '../../components';
import { Wrapper } from '../../styles/globalStyles';
import { Filter, Title, ContainerPedidos } from './styles';
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { isFreteiro } from '../../utils/isFreteiro';
import { objToQueryString } from '../../utils/queyString';
import { FaTruckLoading } from 'react-icons/fa';

import PedidoService from '../../services/PedidoService';

const Dashboard = (): JSX.Element => {
  window.scrollTo(0, 0);
  const { user } = useContext(AuthContext);

  const typeUser = user != null ? isFreteiro(user) : null;

  const queryStringEN = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario__id: `${user?.id}`,
          status: 'EN',
        }
      : {
          cliente__id: `${user?.id}`,
          status: 'EN',
        },
  );

  const queryStringAG = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario__id: `${user?.id}`,
          status: 'AG',
        }
      : {
          cliente__id: `${user?.id}`,
          status: 'AG',
        },
  );

  const queryStringTR = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario__id: `${user?.id}`,
          status: 'TR',
        }
      : {
          cliente__id: `${user?.id}`,
          status: 'TR',
        },
  );
  const queryStringCO = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario__id: `${user?.id}`,
          status: 'CO',
        }
      : {
          cliente__id: `${user?.id}`,
          status: 'CO',
        },
  );

  const queryStringCA = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario__id: `${user?.id}`,
          status: 'CA',
        }
      : {
          cliente__id: `${user?.id}`,
          status: 'CA',
        },
  );

  const {
    data: pedidosEN,
    isLoading: isLoadingPedidosEN,
    isError: errorPedidosEN,
  } = useQuery(
    'pedidosEN',
    async () => await PedidoService.getSearchPedidos(queryStringEN),
    {
      enabled: !!user?.id,
    },
  );

  const {
    data: pedidosAG,
    isLoading: isLoadingPedidosAG,
    isError: errorPedidosAG,
  } = useQuery(
    'pedidosAG',
    async () => await PedidoService.getSearchPedidos(queryStringAG),
    {
      enabled: !!user?.id,
    },
  );

  const {
    data: pedidosTR,
    isLoading: isLoadingPedidosTR,
    isError: errorPedidosTR,
  } = useQuery(
    'pedidosTR',
    async () => await PedidoService.getSearchPedidos(queryStringTR),
    {
      enabled: !!user?.id,
    },
  );

  const {
    data: pedidosCO,
    isLoading: isLoadingPedidosCO,
    isError: errorPedidosCO,
  } = useQuery(
    'pedidosCO',
    async () => await PedidoService.getSearchPedidos(queryStringCO),
    {
      enabled: !!user?.id,
    },
  );

  const {
    data: pedidosCA,
    isLoading: isLoadingPedidosCA,
    isError: errorPedidosCA,
  } = useQuery(
    'pedidosCA',
    async () => await PedidoService.getSearchPedidos(queryStringCA),
    {
      enabled: !!user?.id,
    },
  );

  return (
    <>
      <SEO title="Dashboard" />
      <Layout>
        <Wrapper style={{ minHeight: '80vh' }}>
          <Title>Dashboard</Title>
          <Filter>
            <span>Seus Fretes {/* dos últimos 30 dias */}</span>
            <div>
              <button className="concluidos">Ver todos os concluídos</button>
              {isFreteiro(user) && (
                <Button link={'/fretesDisponiveis'} Icon={FaTruckLoading}>
                  Buscar novos fretes
                </Button>
              )}
            </div>
          </Filter>
          <ContainerPedidos>
            <div className={'containers'}>
              <BoxDashboard
                pedidos={pedidosEN?.data}
                isLoading={isLoadingPedidosEN}
                isError={errorPedidosEN}
                initialToggleValue={true}
                status="Em negociação"
              />
              <BoxDashboard
                pedidos={pedidosAG?.data}
                isLoading={isLoadingPedidosAG}
                isError={errorPedidosAG}
                status="Aguardando coleta"
              />
            </div>
            <div className={'containers'}>
              <BoxDashboard
                pedidos={pedidosTR?.data}
                isLoading={isLoadingPedidosTR}
                isError={errorPedidosTR}
                status="Em trânsito"
              />
              <BoxDashboard
                pedidos={pedidosCO?.data}
                isLoading={isLoadingPedidosCO}
                isError={errorPedidosCO}
                status="Concluído"
              />
              <BoxDashboard
                pedidos={pedidosCA?.data}
                isLoading={isLoadingPedidosCA}
                isError={errorPedidosCA}
                status="Cancelado"
              />
            </div>
          </ContainerPedidos>
        </Wrapper>
      </Layout>
    </>
  );
};

export default Dashboard;
