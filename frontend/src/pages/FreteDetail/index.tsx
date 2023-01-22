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
  const { getPedido, getCliente, getPropostasForPedido, getTypeUser } =
    useApi();
  const { user } = useContext(AuthContext);

  const queryStringPropostas = objToQueryString(
    user &&
      id && {
        usuario: `${user.id}`,
        pedido: id,
      },
  );

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

  const { data: propostas, isLoading: isLoadingPropostas } = useQuery(
    "propostas",
    () => getPropostasForPedido(queryStringPropostas),
    {
      enabled: !!user && !!isFreteiro(user) && !!queryStringPropostas,
    },
  );

  

  if (!user) return <Login />;
  if (
    isLoadingClientePedido ||
    isLoadingPedido ||
    isLoadingPropostas ||
    !pedido
  )
    return <LoadingPage />;
  if (!isFreteiro(user) && user.id !== pedido.data.cliente) return <Login />;
  return (
    <Layout>
      <ContainerPrincipal>
        <Wrapper bgColor="#f5f5f5">
          {pedido && propostas && !isLoadingClientePedido && (
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
