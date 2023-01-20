import BoxDashboard from "../../components/Dashboard";
import Layout from "../../components/Layout";
import { Wrapper } from "../../styles";
import {
  BtnYellow,
  Filter,
  Title,
  ContainerPedidos,
  BtnYellowLinkRouter,
} from "./styles";
import useApi from "../../hooks/useApi";
import { useQuery } from "react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/Auth/AuthContext";
import { isFreteiro } from "../../utils/isFreteiro";
import LoadingPage from "../../components/Global/LoadingPage";

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
  const { user } = useContext(AuthContext);
  const { getSearchPedidos } = useApi();

  const typeUser = user ? isFreteiro(user) : null;
  console.log(typeUser);
  //rever
  const queryStringEN = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: "EN",
        }
      : {
          cliente: `${user?.id}`,
          status: "EN",
        },
  );

  const queryStringAG = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: "AG",
        }
      : {
          cliente: `${user?.id}`,
          status: "AG",
        },
  );

  const queryStringTR = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: "TR",
        }
      : {
          cliente: `${user?.id}`,
          status: "TR",
        },
  );
  const queryStringCO = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: "CO",
        }
      : {
          cliente: `${user?.id}`,
          status: "CO",
        },
  );

  const queryStringCA = objToQueryString(
    typeUser
      ? {
          proposta_set__usuario: `${user?.id}`,
          status: "CA",
        }
      : {
          cliente: `${user?.id}`,
          status: "CA",
        },
  );

  const {
    data: pedidosEN,
    isLoading: isLoadingPedidosEN,
    isError: errorPedidosEN,
  } = useQuery("pedidosEN", () => getSearchPedidos(queryStringEN), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosAG,
    isLoading: isLoadingPedidosAG,
    isError: errorPedidosAG,
  } = useQuery("pedidosAG", () => getSearchPedidos(queryStringAG), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosTR,
    isLoading: isLoadingPedidosTR,
    isError: errorPedidosTR,
  } = useQuery("pedidosTR", () => getSearchPedidos(queryStringTR), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosCO,
    isLoading: isLoadingPedidosCO,
    isError: errorPedidosCO,
  } = useQuery("pedidosCO", () => getSearchPedidos(queryStringCO), {
    enabled: !!user?.id,
  });

  const {
    data: pedidosCA,
    isLoading: isLoadingPedidosCA,
    isError: errorPedidosCA,
  } = useQuery("pedidosCA", () => getSearchPedidos(queryStringCA), {
    enabled: !!user?.id,
  });

  if (!user) return <LoadingPage />;
  return (
    <Layout>
      <Wrapper style={{ minHeight: "80vh" }}>
        <Title>Dashboard</Title>
        <Filter>
          <span>Seus Fretes {/*dos últimos 30 dias*/}</span>
          <div>
            <button className="concluidos">Ver todos os concluídos</button>
            {isFreteiro(user) && (
              <BtnYellowLinkRouter to={"/fretesDisponiveis"}>
                Buscar novos fretes
              </BtnYellowLinkRouter>
            )}
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
