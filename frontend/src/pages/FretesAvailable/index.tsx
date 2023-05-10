import { useContext } from 'react';
import SearchImg from '../../assets/images/search.svg';
import BoxFretes from '../../components/FretesAvailable/BoxFretes';
import Filter from '../../components/FretesAvailable/Filter';
import Loading from '../../components/Global/Loading';
import LoadingPage from '../../components/Global/LoadingPage';
import Head from '../../components/Head';
import Layout from '../../components/Layout';
import { AuthContext } from '../../context/Auth/AuthContext';
import useFilterFretes from '../../hooks/useFilterFretes';
import { type IPedido } from '../../interfaces';
import { Wrapper } from '../../styles/globalStyles';
import { ContainerBg, ContainerFretes, ContainerMain, Search } from './styles';

const FretesAvailable = (): JSX.Element => {
  const { user } = useContext(AuthContext);
  const {
    handleChange: handleChangeFilter,
    veiculos: veiculosArrayChecked,
    coleta: coletaArrayChecked,
    pedidos,
    isLoading,
    isError
  } = useFilterFretes(user);

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
              <input type="text" placeholder="Material" />
            </Search>
            <ContainerMain>
              <Filter
                handleChange={handleChangeFilter}
                veiculos={veiculosArrayChecked}
                coleta={coletaArrayChecked}
              />
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
