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

const FreteDetail = () => {
  const [pedido, setPedido] = useState<IPedido>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { getPedido } = useApi();
  const { user, typeUser } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true);
    getPedido(Number(id))
      .then((res) => {
        setPedido(res.data);
        setLoading(false);
      })
      .catch((res) => console.log(res));
  }, []);

  if (loading) return <p>Carregando...</p>;

  if (loading === false && typeUser === 2 && user?.id !== pedido?.cliente)
    return <Login />;

  return (
    <Layout>
      <ContainerPrincipal>
        <Wrapper bgColor="#f5f5f5">
          <FreteDetailComponent pedido={pedido} />
        </Wrapper>
      </ContainerPrincipal>
    </Layout>
  );
};

export default FreteDetail;
