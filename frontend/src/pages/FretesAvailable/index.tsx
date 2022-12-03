import Footer from "../../components/Footer";
import BoxFretes from "../../components/FretesAvailable/BoxFretes";
import Filter from "../../components/FretesAvailable/Filter";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../styles";
import { ContainerBg, ContainerMain, ContainerFretes, Search } from "./styles";
import SearchImg from "../../assets/images/search.svg";
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces";

const FretesAvailable = () => {
  const [pedidos, setPedidos] = useState<IPedido[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { getPedidos } = useApi();

  useEffect(() => {
    setLoading(true)
    getPedidos()
      .then((res) => {
        setPedidos(res.data);
        setLoading(false);
      })
      .catch(() => console.log("erro"));
  }, []);

  return (
    <>
      <Navbar />
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
              {pedidos && !loading ? (
                pedidos.map((pedido) => <BoxFretes key={pedido.id} pedido={pedido}/>)
              ) : (
                <p>Carregando</p>
              )}
            </ContainerFretes>
          </ContainerMain>
        </Wrapper>
      </ContainerBg>
      <Footer />
    </>
  );
};

export default FretesAvailable;
