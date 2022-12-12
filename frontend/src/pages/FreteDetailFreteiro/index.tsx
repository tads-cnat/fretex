import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../styles";
import { ContainerPrincipal } from './styles'
import { useContext, useEffect, useState } from "react";
import { IPedido } from "../../interfaces";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import { AuthContext } from "../../context/Auth/AuthContext";
import FreteDetailComponent from "../../components/FreteDetailFreteiroComponents/FreteDetail";
import Login from "../Login";


const Index = () => {
  const [pedido, setPedido] = useState<IPedido>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { getPedido } = useApi();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    setLoading(true)
    getPedido(Number(id))
      .then((res) => {
        setPedido(res.data);
        setLoading(false)
      })
      .catch((res) => console.log(res));
  }, []);
  
  if (loading) return <p>Carregando...</p>

  if (loading === false && user?.id !== pedido?.cliente) return <Login/>
  return (
    <>
    <Navbar/>
    <ContainerPrincipal>
      <Wrapper bgColor="#f5f5f5">
        <FreteDetailComponent pedido={pedido} />
      </Wrapper>
    </ContainerPrincipal>  
    <Footer/>
    </>
  )
}

export default Index