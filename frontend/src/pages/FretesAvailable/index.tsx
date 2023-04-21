import BoxFretes from '../../components/FretesAvailable/BoxFretes';
import Filter from '../../components/FretesAvailable/Filter';
import { Wrapper } from '../../styles/globalStyles';
import { ContainerBg, ContainerMain, ContainerFretes, Search } from './styles';
import SearchImg from '../../assets/images/search.svg';
import useApi from '../../hooks/useApi';
import { useContext } from 'react';
import { type IPedido } from '../../interfaces';
import Layout from '../../components/Layout';
import { useQuery } from 'react-query';
import Loading from '../../components/Global/Loading';
import { AuthContext } from '../../context/Auth/AuthContext';
import LoadingPage from '../../components/Global/LoadingPage';
import { objToQueryString } from '../../utils/queyString';
import Head from '../../components/Head';

const FretesAvailable = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const { getSearchPedidos } = useApi();
  // const [inputText, setInputText] = useState();

  const query = objToQueryString({
    status: 'EN',
  });

  const {
    data: pedidos,
    isLoading,
    isError,
  } = useQuery(
    'pedidosDisponiveis',
    async () => await getSearchPedidos(query),
    {
      enabled: !(user == null) && !!query,
    },
  );
  /*
  const { data, status } = useQuery(['search', inputText], () => getPedidos(), {
    refetchOnWindowFocus: false
  });
*/
  const handleChange = (e: any): void => {};

  if (user == null) return <LoadingPage />;
  return (
    <>
      <Head title="Fretes disponíveis" />
      <Layout>
        <ContainerBg>
          <Wrapper bgColor="#f5f5f5">
            <h1>Fretes Disponíveis</h1>
            <Search>
              <img src={SearchImg} alt="" />
              <input
                type="text"
                placeholder="Material"
                onChange={(e) => {
                  handleChange(e.target.value);
                }}
              />
            </Search>
            <ContainerMain>
              <Filter />
              <ContainerFretes>
                {isError && <p>Houve um erro, tente novamente!</p>}
                {!isLoading && pedidos.data.length === 0 && (
                  <p
                    style={{
                      textAlign: 'center',
                      marginTop: '40px',
                      fontWeight: 'bold',
                    }}
                  >
                    Não há pedidos postados
                  </p>
                )}
                {!isLoading && pedidos ? (
                  pedidos.data.map((pedido: IPedido) => (
                    <BoxFretes key={pedido.id} pedido={pedido} />
                  ))
                ) : (
                  <Loading />
                )}
              </ContainerFretes>
            </ContainerMain>
          </Wrapper>
        </ContainerBg>
      </Layout>{' '}
    </>
  );
};

export default FretesAvailable;
