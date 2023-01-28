import { Wrapper } from "../../styles";
import { ContainerPrincipal } from "./styles";
import { useContext, useEffect, useState } from "react";
import { IPedido } from "../../interfaces";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";
import FreteDetailComponent from "../../components/FreteDetailFreteiroComponents/FreteDetail";
import Login from "../Login";
import Layout from "../../components/Layout";
import { useQuery } from "react-query";
import LoadingPage from "../../components/Global/LoadingPage";
import { isFreteiro } from "../../utils/isFreteiro";
import { objToQueryString } from "../../utils/queyString";

const FreteDetail = () => {
  const { id } = useParams();
  const { getPedido, getCliente, getPropostasForPedido, getPropostas } =
    useApi();
  const { user } = useContext(AuthContext);

  const { data: pedido, isLoading: isLoadingPedido } = useQuery(
    ["pedido", id],
    () => getPedido(Number(id)),
    {
      enabled: !!id,
    },
  );

  const { data: userPedido, isLoading: isLoadingClientePedido } = useQuery(
    ["pedidoCreatedBy", id],
    () => getCliente(pedido.data.cliente),
    {
      enabled: !!pedido?.data.cliente,
    },
  );

  const queryStringPropostas =
    pedido?.data?.id &&
    user &&
    objToQueryString({
      pedido: pedido.data.id,
    });

  const { data: propostas, isLoading: isLoadingPropostas } = useQuery(
    ["propostasForPedido", id],
    () => getPropostasForPedido(queryStringPropostas),
    {
      enabled: !!user && !!pedido?.data && !!queryStringPropostas,
    },
  );

  if (!user) return <Login />;
  if (isLoadingPropostas || isLoadingPedido) return <LoadingPage />;
  if (user && !isFreteiro(user) && user.id !== pedido.data.cliente)
    return <Login />;
  return (
    <Layout>
      <ContainerPrincipal>
        <Wrapper bgColor="#f5f5f5">
          {!isLoadingClientePedido &&
            !isLoadingPedido &&
            !isLoadingPropostas && (
              <FreteDetailComponent
                pedido={pedido.data}
                clientePedido={userPedido.data}
                actualUser={user}
                propostas={propostas.data}
              />
            )}
        </Wrapper>
      </ContainerPrincipal>
    </Layout>
  );
};

export default FreteDetail;
