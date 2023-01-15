import { Card, Informacoes, Img } from "./styles";
import { IVeiculo } from "../../../interfaces";

const CardVeiculo = (veiculos: IVeiculo) => {
    return (
        <Card>
            <Informacoes>
                <div className="InfoPrincipais">
                    <h1>{veiculos.modelo}- {veiculos.ano}</h1>
                    <h2>{veiculos.modelo}</h2>
                </div>
                <div className="InfoAdicionais">
                    <span>Cor:{veiculos.cor}</span>
                    <span>Tipo:{veiculos.tipo_veiculo}</span>
                    <span>Placa:{veiculos.placa}</span>
                </div>
            </Informacoes>
            <div className="ImagemVeiculo">
                <Img src={veiculos.url_foto}/>
            </div>
        </Card>
    )
}

export default CardVeiculo;