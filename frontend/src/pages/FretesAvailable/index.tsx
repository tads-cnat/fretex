import BoxFretes from '../../components/FretesAvailable/BoxFretes';
import Filter from '../../components/FretesAvailable/Filter';
import { Wrapper } from '../../styles/globalStyles';
import {
  ContainerBg,
  ContainerMain,
  ContainerFretes,
  Search,
  MessageError,
} from './styles';
import SearchImg from '../../assets/images/search.svg';
import { type IPedido } from '../../interfaces';
import Layout from '../../components/Layout';
import Head from '../../components/Head';
import useFilterFretes from '../../hooks/useFilterFretes';
import LoadingPage from '../../components/Global/LoadingPage';

const FretesAvailable = (): JSX.Element => {
  const {
    handleChange: handleChangeFilter,
    veiculos: veiculosArrayChecked,
    coleta: coletaArrayChecked,
    pedidos,
    isLoadingPedidos,
    isLoadingMutationPedidos,
    isErrorPedidos,
    isErrorMutationPedidos,
  } = useFilterFretes();

  const isLoading = isLoadingPedidos || isLoadingMutationPedidos;
  const hasErrorPedidos = isErrorPedidos || isErrorMutationPedidos;

  return (
    <>
      <Head title="Fretes disponíveis" />
      <Layout>
        <ContainerBg>
          <Wrapper bgColor="#f5f5f5">
            <h1>Fretes Disponíveis</h1>
            <Search>
              <img src={SearchImg} alt="" />
              <input type="text" placeholder="Material" />
            </Search>
            <ContainerMain>
              <Filter
                handleChange={handleChangeFilter}
                veiculos={veiculosArrayChecked}
                coleta={coletaArrayChecked}
              />
              <ContainerFretes>
                {hasErrorPedidos ? (
                  <MessageError>Houve um erro, tente novamente!</MessageError>
                ) : (
                  <>
                    {isLoading ? (
                      <LoadingPage height="50vh" />
                    ) : (
                      <>
                        {pedidos.data.length !== 0 ? (
                          pedidos.data.map((pedido: IPedido) => (
                            <BoxFretes key={pedido.id} pedido={pedido} />
                          ))
                        ) : (
                          <MessageError>Não há pedidos postados</MessageError>
                        )}
                      </>
                    )}
                  </>
                )}
              </ContainerFretes>
            </ContainerMain>
          </Wrapper>
        </ContainerBg>
      </Layout>
    </>
  );
};

export default FretesAvailable;
