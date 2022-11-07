import Footer from "../../components/Footer";
import BoxFretes from "../../components/FretesAvailable/BoxFretes";
import Filter from "../../components/FretesAvailable/Filter";
import Navbar from "../../components/Navbar";
import { Wrapper } from "../../styles";
import { ContainerBg, ContainerMain, Search } from "./styles";
import SearchImg from "../../assets/images/search.svg"

const FretesAvailable = () => {

    return (
        <>
            <Navbar />
            <ContainerBg>
                <Wrapper bgColor="#f5f5f5">
                    <h1>Fretes Disponíveis</h1>
                    <Search>
                        <img src={SearchImg} alt="" />
                        <input type="text" placeholder="Material"/>
                    </Search>
                    <ContainerMain>
                        <Filter />
                        <BoxFretes />
                    </ContainerMain>
                </Wrapper>
            </ContainerBg>
            <Footer />
        </>
    )

}


export default FretesAvailable;