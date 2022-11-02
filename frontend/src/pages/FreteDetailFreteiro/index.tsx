import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FreteDetail from "../../components/FreteDetailFreteiroComponents/FreteDetail";
import { Wrapper } from "../../styles";
const index = () => {
  return (
    <>
    <Navbar/>
    <Wrapper>
      <FreteDetail/>
    </Wrapper>
    <Footer/>
    </>
  )
}

export default index