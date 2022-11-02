import { ContainerInfos,ContainerImg, ContainerInfo, Img } from "./styles"
import ImgInfo from "../../assets/images/InfoEntregas.png"
import fundo from "../../assets/images/fundoBranco.svg"
import fundoBaixo from "../../assets/images/fundoBrancoBaixo.svg"

const InfoSection = () => {

    return (
        <ContainerInfos img={fundo} img2={fundoBaixo}>
            <ContainerImg>
                <Img src={ImgInfo} alt='Entregador'></Img>
            </ContainerImg>
            <ContainerInfo>Uma das melhores plataformas para envio de cargas de pequeno e médio porte.</ContainerInfo>
        </ContainerInfos>
    )
}

export default InfoSection;