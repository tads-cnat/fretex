import { Wrapper } from '../../styles/globalStyles';
import { ContainerPrincipal } from './styles';
import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';
import FreteDetailComponent from '../../components/FreteDetailFreteiroComponents/FreteDetail';
import Layout from '../../components/Layout';
import { useQuery } from 'react-query';
import LoadingPage from '../../components/Global/LoadingPage';
import { objToQueryString } from '../../utils/queyString';
import Head from '../../components/Head';

import PedidoService from '../../services/PedidoService';
import ClienteService from '../../services/ClienteService';
import PropostaService from '../../services/PropostaService';

const FreteDetail = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const { data: pedido, isLoading: isLoadingPedido } = useQuery(
    ['pedido', id],
    async () => await PedidoService.get(Number(id)),
    {
      enabled: id !== undefined,
    },
  );

  const { data: userPedido, isLoading: isLoadingClientePedido } = useQuery(
    ['pedidoCreatedBy', id],
    async () => await ClienteService.get(pedido.data.cliente),
    {
      enabled: !isLoadingPedido,
    },
  );

  const queryStringPropostas = useMemo(() => {
    if (pedido !== undefined) {
      return objToQueryString({
        pedido: pedido.data.id,
      });
    }
    return '';
  }, [pedido]);

  console.log(queryStringPropostas);
  const { data: propostas, isLoading: isLoadingPropostas } = useQuery(
    ['propostasForPedido', id],
    async () =>
      await PropostaService.getPropostasForPedido(queryStringPropostas),
    {
      enabled:
        !isLoadingPedido &&
        !isLoadingClientePedido &&
        queryStringPropostas !== '',
    },
  );
  console.log(pedido, userPedido, propostas);
  return (
    <>
      <Head title="Detalhes do frete" />
      <Layout>
        <ContainerPrincipal>
          <Wrapper bgColor="#f5f5f5">
            {(isLoadingPropostas || isLoadingPedido || isLoadingPropostas) && (
              <LoadingPage />
            )}
            {!isLoadingClientePedido &&
              !isLoadingPedido &&
              !isLoadingPropostas &&
              user !== null && (
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
