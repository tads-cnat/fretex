import BoxDashboard from "../../components/Dashboard";
import Layout from "../../components/Layout";
import { Wrapper } from "../../styles";
import { BtnYellow, Filter, Title, ContainerPedidos } from "./styles";
import useApi from "../../hooks/useApi";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

function objToQueryString(obj: any) {
  const keyValuePairs = [];
  for (const key in obj) {
    keyValuePairs.push(
      encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]),
    );
  }
  return keyValuePairs.join("&");
}

const Dashboard = () => {
  const { id } = useParams();
  const { getSearchPedidos } = useApi();

  const queryStringEN = objToQueryString({
    cliente: `${id}`,
    status: "EN",
  });

  const queryStringAG = objToQueryString({
    cliente: `${id}`,
    status: "AG",
  });
  const queryStringTR = objToQueryString({
    cliente: `${id}`,
    status: "TR",
  });
  const queryStringCO = objToQueryString({
    cliente: `${id}`,
    status: "CO",
  });
  const queryStringCA = objToQueryString({
    cliente: `${id}`,
    status: "CA",
  });

  const {
    data: pedidosEN,
    isLoading: isLoadingPedidosEN,
    isError: errorPedidosEN,
  } = useQuery("pedidosEN", () => getSearchPedidos(queryStringEN));
  const {
    data: pedidosAG,
    isLoading: isLoadingPedidosAG,
    isError: errorPedidosAG,
  } = useQuery("pedidosAG", () => getSearchPedidos(queryStringAG));
  const {
    data: pedidosTR,
    isLoading: isLoadingPedidosTR,
    isError: errorPedidosTR,
  } = useQuery("pedidosTR", () => getSearchPedidos(queryStringTR));
  const {
    data: pedidosCO,
    isLoading: isLoadingPedidosCO,
    isError: errorPedidosCO,
  } = useQuery("pedidosCO", () => getSearchPedidos(queryStringCO));
  const {
    data: pedidosCA,
    isLoading: isLoadingPedidosCA,
    isError: errorPedidosCA,
  } = useQuery("pedidosCA", () => getSearchPedidos(queryStringCA));

  /*
  const queryString = {
    EN: objToQueryString({
      cliente: `${id}`,
      status: "EN",
    }),
    AG: objToQueryString({
      cliente: `${id}`,
      status: "AG",
    }),
    TR: objToQueryString({
      cliente: `${id}`,
      status: "TR",
    }),
    CO: objToQueryString({
      cliente: `${id}`,
      status: "CO",
    }),
    CA: objToQueryString({
      cliente: `${id}`,
      status: "CA",
    }),
  };

  const {
    data: pedidosEN,
    isLoading: isLoadingPedidosEN,
    isError: errorPedidosEN,
  } = useQuery("pedidosEN", () => getSearchPedidos(queryString.EN));
  const {
    data: pedidosAG,
    isLoading: isLoadingPedidosAG,
    isError: errorPedidosAG,
  } = useQuery("pedidosAG", () => getSearchPedidos(queryString.AG));
  const {
    data: pedidosTR,
    isLoading: isLoadingPedidosTR,
    isError: errorPedidosTR,
  } = useQuery("pedidosTR", () => getSearchPedidos(queryString.TR));
  const {
    data: pedidoCO,
    isLoading: isLoadingPedidoCO,
    isError: errorPedidoCO,
  } = useQuery("pedidoCO", () => getSearchPedidos(queryString.CO));
  const {
    data: pedidoCA,
    isLoading: isLoadingPedidoCA,
    isError: errorPedidoCA,
  } = useQuery("pedidoCA", () => getSearchPedidos(queryString.CA));
  */

  return (
    <Layout>
      <Wrapper style={{ minHeight: "80vh" }}>
        <Title>Dashboard</Title>
        <Filter>
          <span>Fretes dos últimos 30 dias</span>
          <div>
            <button className="concluidos">Ver todos os concluídos</button>
            <BtnYellow>Buscar novos fretes</BtnYellow>
          </div>
        </Filter>
        <ContainerPedidos>
          <div className={"containers"}>
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
          <div className={"containers"}>
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
  );
};

export default Dashboard;
