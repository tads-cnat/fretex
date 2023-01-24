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
    "pedido",
    () => getPedido(Number(id)),
    {
      enabled: !!id,
    },
  );

  const { data: userPedido, isLoading: isLoadingClientePedido } = useQuery(
    "pedidoCreatedBy",
    () => getCliente(pedido.data.cliente),
    {
      enabled: !!pedido?.data.cliente,
    },
  );

  const queryStringPropostas =
    pedido?.data?.id &&
    user &&
    //   isFreteiro(user) &&
    objToQueryString({
      usuario: user.id,
      pedido: pedido.data.id,
    });

  const {
    data: propostasForFreteiro,
    isLoading: isLoadingPropostasForFreteiro,
  } = useQuery(
    "propostasForFreteiro",
    () => getPropostasForPedido(queryStringPropostas),
    {
      enabled:
        !!user &&
        !!isFreteiro(user) &&
        !!pedido?.data &&
        !!queryStringPropostas,
    },
  );

  const { data: propostasForCliente, isLoading: isLoadingPropostasForCliente } =
    useQuery("propostasForCliente", () => getPropostas(), {
      enabled: !!user && !!!isFreteiro(user) && !!pedido?.data,
    });

  if (!user) return <Login />;
  if (
    isLoadingPropostasForFreteiro ||
    isLoadingPropostasForCliente ||
    isLoadingPedido
  )
    return <LoadingPage />;
  if (user && !isFreteiro(user) && user.id !== pedido.data.cliente)
    return <Login />;
  return (
    <Layout>
      <ContainerPrincipal>
        <Wrapper bgColor="#f5f5f5">
          {!isLoadingClientePedido &&
            !isLoadingPedido &&
            !isLoadingPropostasForFreteiro &&
            !isLoadingPropostasForCliente && (
              <FreteDetailComponent
                pedido={pedido.data}
                clientePedido={userPedido.data}
                actualUser={user}
                propostas={
                  isFreteiro(user) ? propostasForFreteiro.data : propostasForCliente.data
                }
              />
            )}
        </Wrapper>
      </ContainerPrincipal>
    </Layout>
  );
};

export default FreteDetail;
