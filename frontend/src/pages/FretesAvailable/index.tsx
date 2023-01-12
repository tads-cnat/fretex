import BoxFretes from "../../components/FretesAvailable/BoxFretes";
import Filter from "../../components/FretesAvailable/Filter";
import { Wrapper } from "../../styles";
import { ContainerBg, ContainerMain, ContainerFretes, Search } from "./styles";
import SearchImg from "../../assets/images/search.svg";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces";
import Layout from "../../components/Layout";
import { useQuery } from "react-query";
import Loading from "../../components/Global/Loading";

const FretesAvailable = () => {
  const { getPedidos } = useApi();
  const { data: pedidos, isLoading, isError } = useQuery("pedidos", getPedidos);

  return (
    <Layout>
      <ContainerBg>
        <Wrapper bgColor="#f5f5f5">
          <h1>Fretes Disponíveis</h1>
          <Search>
            <img src={SearchImg} alt="" />
            <input type="text" placeholder="Material" />
          </Search>
          <ContainerMain>
            <Filter />
            <ContainerFretes>
              {isError && <p>Houve um erro, tente novamente!</p>}
              {isLoading && <Loading />}
              {!isLoading && pedidos.data.lenght === 0 && (
                <p>Não há pedidos postados</p>
              )}
              {!isLoading && pedidos ? (
                pedidos.data.map((pedido: IPedido) => (
                  <BoxFretes key={pedido.id} pedido={pedido} />
                ))
              ) : (
                <p>Carregando</p>
              )}
            </ContainerFretes>
          </ContainerMain>
        </Wrapper>
      </ContainerBg>
    </Layout>
  );
};

export default FretesAvailable;
