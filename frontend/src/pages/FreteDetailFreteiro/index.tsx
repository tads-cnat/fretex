import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FreteDetail from "../../components/FreteDetailFreteiroComponents/FreteDetail";
import { Wrapper } from "../../styles";
import { ContainerPrincipal } from './styles'


const index = () => {
  return (
    <>
    <Navbar/>
    <ContainerPrincipal>
      <Wrapper bgColor="#f5f5f5">
        <FreteDetail/>
      </Wrapper>
    </ContainerPrincipal>  
    <Footer/>
    </>
  )
}

export default index