import { ContainerMain, ContainerInfoBtn, ContainerInfos, ContainerEndereco, End, Seta, ContainerCalendar,ContainerImgMain, ContainerImg, BtnYellow } from "./styles"
import caixa from "../../../assets/images/caixas.png"
import Loc from "../../../assets/images/geo-alt.svg"
import Arrow from "../../../assets/images/arrow-right.svg"
import Calendar from "../../../assets/images/calendar.svg"

const BoxFretes = () => {
    return (
        <ContainerMain>
            <ContainerInfoBtn>
                <ContainerInfos>
                    <p>Arthur Medeiros</p>
                    <h2>Nome do produto</h2>
                    <ContainerEndereco>
                        <End>
                            <img src={Loc} alt="Localização" />
                            <span>IFRN, TIROL, Natal/RN</span>
                        </End>
                        <Seta src={Arrow} alt="Seta" />
                        <End>
                            <img src={Loc} alt="Localização" />
                            <span>FRIOZIN, GOLA, Natal/RN</span>
                        </End>
                    </ContainerEndereco>
                    <ContainerCalendar>
                        <img src={Calendar} alt="Calendária" />
                        <span>Entregar até 23/10/2022</span>
                    </ContainerCalendar>
                </ContainerInfos>
                <BtnYellow>Negociar</BtnYellow>
            </ContainerInfoBtn>
            <ContainerImgMain>
                <ContainerImg src={caixa} alt="caixas" />
            </ContainerImgMain>
            
        </ContainerMain>
    )
}

export default BoxFretes;