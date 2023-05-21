import { Wrapper } from '../../styles/globalStyles';
import { ContainerPrincipal } from './styles';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';
import FreteDetailComponent from '../../components/FreteDetailFreteiroComponents/FreteDetail';
import Login from '../Login';
import Layout from '../../components/Layout';
import { useQuery } from 'react-query';
import LoadingPage from '../../components/Global/LoadingPage';
import { objToQueryString } from '../../utils/queyString';
import Head from '../../components/Head';

import PedidoService from '../../services/PedidoService';
import ClienteService from '../../services/ClienteService';
import PropostaService from '../../services/PropostaService';

const FreteDetail = (): JSX.Element => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const { data: pedido, isLoading: isLoadingPedido } = useQuery(
    ['pedido', id],
    async () => await PedidoService.get(Number(id)),
    {
      enabled: id !== undefined,
    },
  );
console.log(pedido?.data)
  const { data: userPedido, isLoading: isLoadingClientePedido } = useQuery(
    ['pedidoCreatedBy', id],
    async () => await ClienteService.get(pedido.data.cliente),
    {
      enabled: pedido?.data?.cliente !== undefined || pedido?.data?.cliente !== null,
    },
  );
/*
 const { data: userPedido, isLoading: isLoadingClientePedido } = useQuery(
    ['pedidoCreatedBy', id],
    async () => await getCliente(pedido?.data?.cliente),
  );

*/
  const queryStringPropostas =
    pedido?.data?.id !== undefined && user != null
      ? objToQueryString({
          pedido: pedido?.data?.id,
        })
      : '';

  const { data: propostas, isLoading: isLoadingPropostas } = useQuery(
    ['propostasForPedido', id],
    async () =>
      await PropostaService.getPropostasForPedido(queryStringPropostas),
    {
      enabled:
        !(user == null) &&
        pedido?.data !== undefined &&
        queryStringPropostas !== '',
    },
  );
//  console.log(pedido, userPedido, propostas);
  if (user == null) return <Login />;
  if (propostas == null) return <LoadingPage />;
  if (isLoadingPropostas || isLoadingPedido) return <LoadingPage />;
  return (
    <>
      <Head title="Detalhes do frete" />
      <Layout>
        <ContainerPrincipal>
          <Wrapper bgColor="#f5f5f5">
            {!isLoadingClientePedido &&
              !isLoadingPedido &&
              !isLoadingPropostas && (
                <FreteDetailComponent
                  pedido={pedido?.data}
                  clientePedido={userPedido?.data}
                  actualUser={user}
                  propostas={propostas?.data}
                />
              )}
          </Wrapper>
        </ContainerPrincipal>
      </Layout>
    </>
  );
};

export default FreteDetail;
