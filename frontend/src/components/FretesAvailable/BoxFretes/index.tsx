import { ContainerMain, ContainerInfoBtn, ContainerInfos, ContainerEndereco, EndColeta, EndEntrega, ContainerCalendar, ContainerImg, BtnYellow } from "./styles"
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
                        <EndColeta>
                            <img src={Loc} alt="Localização" />
                            <span>IFRN, TIROL, Natal/RN</span>
                        </EndColeta>
                        <img src={Arrow} alt="Seta" />
                        <EndEntrega>
                            <span>FRIOZIN, GOLA, Natal/RN</span>
                        </EndEntrega>
                    </ContainerEndereco>
                    <ContainerCalendar>
                        <img src={Calendar} alt="Calendária" />
                        <span>Entregar até 23/10/2022</span>
                    </ContainerCalendar>
                </ContainerInfos>
                <BtnYellow>Negociar</BtnYellow>
            </ContainerInfoBtn>
            <ContainerImg src={caixa} alt="caixas" />
        </ContainerMain>
    )
}

export default BoxFretes;