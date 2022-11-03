import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FreteDetail from "../../components/FreteDetailFreteiroComponents/FreteDetail";
import { Wrapper } from "../../styles";



const index = () => {
  return (
    <>
    <Navbar/>
    <Wrapper bgColor="#f5f5f5">
      <FreteDetail/>
    </Wrapper>
    <Footer/>
    </>
  )
}

export default index