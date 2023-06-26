import { Wrapper } from '../../styles/globalStyles';
import { ContainerPrincipal } from './styles';
import { useContext, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../context/Auth/AuthContext';
import { FreteDetailComponent } from './components';
import { useQuery } from 'react-query';
import { LoadingPage, SEO, Layout } from '../../components';
import { objToQueryString } from '../../utils/queyString';
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
      enabled: !!id,
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

  const isLoadingPage =
    isLoadingPropostas || isLoadingPedido || isLoadingPropostas;

  const pageLoaded =
    !isLoadingClientePedido &&
    !isLoadingPedido &&
    !isLoadingPropostas &&
    user !== null;

  return (
    <>
      <SEO title="Detalhes do frete" />
      <Layout>
        <ContainerPrincipal>
          <Wrapper bgColor="#f5f5f5">
            {isLoadingPage && <LoadingPage />}
            {pageLoaded && (
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
