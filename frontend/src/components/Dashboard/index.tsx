import Loc from "../../assets/images/geo-alt.svg";
import Arrow from "../../assets/images/arrow-right.svg"
import Calendar from "../../assets/images/calendar.svg";
import { ReactComponent as Mini } from "../../assets/images/minus-circle.svg"
import { Botoes, Box, BoxPedido, Header } from "./styles"
import { ContainerCalendar, ContainerEndereco, ContainerInfos, End, Seta } from "../FretesAvailable/BoxFretes/styles";
import { IPedido } from "../../interfaces";


interface IPedidos {
    pedidos: IPedido[]
}

const BoxDashboard = ({ pedidos }: IPedidos, { Status }: any) => {
    const formatDate = (pedido : any) => {
        const date = pedido.data_entrega.replaceAll("-", "/")
        const year = date.slice(0, 4)
        const day = date.slice(8)
        const month = date.slice(4, 8)
        return `${day}${month}${year}`
    }

    return (
        <Box>
            <Header>
                <div>
                    <span></span>
                    <h1>{Status}</h1>
                </div>
                <button>
                    <Mini />
                </button>
            </Header>
            {pedidos.map((pedido) =>
                <BoxPedido>
                    <ContainerInfos>
                        <p>{pedido.clienteName}</p>
                        <h2>{pedido.produto.nome}</h2>
                        <ContainerEndereco>
                            <End>
                                <img src={Loc} alt="Localização" />
                                <span>{`${pedido.origem.rua}, ${pedido.origem.numero} - ${pedido.origem.bairro}, ${pedido.origem.cidade}/${pedido.origem.estado}`}</span>
                            </End>
                            <Seta src={Arrow} alt="Seta" />
                            <End>
                                <img src={Loc} alt="Localização" />
                                <span>{`${pedido.destino.rua}, ${pedido.destino.numero} - ${pedido.destino.bairro}, ${pedido.destino.cidade}/${pedido.destino.estado}`}</span>
                            </End>
                        </ContainerEndereco>
                        <ContainerCalendar>
                            <img src={Calendar} alt="Calendária" />
                            <span>Entregar até {formatDate(pedido)}</span>
                        </ContainerCalendar>
                    </ContainerInfos>
                    <Botoes>
                        <button>Alterar status</button>
                        <button>Visualizar</button>
                    </Botoes>
                </BoxPedido>
            )}
        </Box>
    )
}

export default BoxDashboard