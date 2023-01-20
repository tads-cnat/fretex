import { Card, Informacoes, Img } from "./styles";
import { IVeiculo } from "../../../interfaces";
import { ReactComponent as Gota } from "../../../assets/images/gota_colorir.svg";
import { ReactComponent as Info } from "../../../assets/images/InfoCircle.svg";
import Placa from "../../../assets/images/placaCarro.png";


const CardVeiculo = ({ veiculos }: { veiculos: IVeiculo }) => {
    return (
        <Card>
            <Informacoes>
                <div className="InfoPrincipais">
                    <h1>{veiculos.modelo} - {veiculos.ano}</h1>
                    <h2>{veiculos.modelo}</h2>
                </div>
                <div className="InfoAdicionais">
                    <div>
                        <Gota />
                        <span>Cor: {veiculos.cor}</span>
                    </div>
                    <div>
                        <Info  />
                        <span>Tipo: {veiculos.tipo_veiculo}</span>
                    </div>
                    <div>
                        <img src={Placa} alt="placa" />
                        <span>Placa: {veiculos.placa}</span>
                    </div>
                </div>
            </Informacoes>
            <div className="ImagemVeiculo">
                <Img src={veiculos.url_foto} />
            </div>
        </Card>
    )
}

export default CardVeiculo;