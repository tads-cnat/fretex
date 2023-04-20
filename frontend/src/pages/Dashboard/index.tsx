import BoxDashboard from '../../components/Dashboard';
import Layout from '../../components/Layout';
import { Wrapper } from '../../styles';
import { Filter, Title, ContainerPedidos, BtnYellowLinkRouter } from './styles';
import useApi from '../../hooks/useApi';
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { AuthContext } from '../../context/Auth/AuthContext';
import { isFreteiro } from '../../utils/isFreteiro';
import LoadingPage from '../../components/Global/LoadingPage';
import { objToQueryString } from '../../utils/queyString';
import Head from '../../components/Head';

const Dashboard = (): JSX.Element => {
  window.scrollTo(0, 0);
  const { user } = useContext(AuthContext);
  const { getSearchPedidos } = useApi();

  const typeUser = user != null ? isFreteiro(user) : null;

  const queryStringEN = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: 'EN',
        }
      : {
          cliente: `${user?.id}`,
          status: 'EN',
        },
  );

  const queryStringAG = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: 'AG',
        }
      : {
          cliente: `${user?.id}`,
          status: 'AG',
        },
  );

  const queryStringTR = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: 'TR',
        }
      : {
          cliente: `${user?.id}`,
          status: 'TR',
        },
  );
  const queryStringCO = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: 'CO',
        }
      : {
          cliente: `${user?.id}`,
          status: 'CO',
        },
  );

  const queryStringCA = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: 'CA',
        }
      : {
          cliente: `${user?.id}`,
          status: 'CA',
        },
  );

  const {
    data: pedidosEN,
    isLoading: isLoadingPedidosEN,
    isError: errorPedidosEN,
  } = useQuery('pedidosEN', async () => await getSearchPedidos(queryStringEN), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosAG,
    isLoading: isLoadingPedidosAG,
    isError: errorPedidosAG,
  } = useQuery('pedidosAG', async () => await getSearchPedidos(queryStringAG), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosTR,
    isLoading: isLoadingPedidosTR,
    isError: errorPedidosTR,
  } = useQuery('pedidosTR', async () => await getSearchPedidos(queryStringTR), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosCO,
    isLoading: isLoadingPedidosCO,
    isError: errorPedidosCO,
  } = useQuery('pedidosCO', async () => await getSearchPedidos(queryStringCO), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosCA,
    isLoading: isLoadingPedidosCA,
    isError: errorPedidosCA,
  } = useQuery('pedidosCA', async () => await getSearchPedidos(queryStringCA), {
    enabled: !!user?.id,
  });

  if (user == null) return <LoadingPage />;
  return (
    <>
    <Head title='Dashboard'/>
      <Layout>
        <Wrapper style={{ minHeight: '80vh' }}>
          <Title>Dashboard</Title>
          <Filter>
            <span>Seus Fretes {/* dos últimos 30 dias */}</span>
            <div>
              <button className="concluidos">Ver todos os concluídos</button>
              {isFreteiro(user) && (
                <BtnYellowLinkRouter to={'/fretesDisponiveis'}>
                  Buscar novos fretes
                </BtnYellowLinkRouter>
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
