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

const FreteDetail = () => {
  const { id } = useParams();
  const { getPedido, getCliente } = useApi();
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

  if (!user) return <Login />;
  if (!isFreteiro(user) && user.id !== pedido.data.cliente) return <Login />;
  if (isLoadingPedido || isLoadingClientePedido) return <LoadingPage />;
  return (
    <Layout>
      <ContainerPrincipal>
        <Wrapper bgColor="#f5f5f5">
          {(isLoadingClientePedido || isLoadingPedido) && <LoadingPage />}
          {!isLoadingClientePedido && (
            <FreteDetailComponent
              pedido={pedido.data}
              clientePedido={userPedido.data}
              actualUser={user}
            />
          )}
        </Wrapper>
      </ContainerPrincipal>
    </Layout>
  );
};

export default FreteDetail;
