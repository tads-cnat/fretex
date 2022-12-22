import Loc from "../../assets/images/geo-alt.svg";
import Arrow from "../../assets/images/arrow-right.svg"
import Calendar from "../../assets/images/calendar.svg";
import { ReactComponent as Min } from "../../assets/images/minus-circle.svg"
import { ReactComponent as Max } from "../../assets/images/minus-circle-plus.svg"
import { Botoes, Box, BoxPedido, Header } from "./styles"
import { ContainerCalendar, ContainerEndereco, ContainerInfos, End, Seta } from "../FretesAvailable/BoxFretes/styles";
import { IPedido } from "../../interfaces";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

interface IBoxDashBoard {
    pedidos: IPedido[]
    status: string
    value: boolean
    toggle: () => void;
}


const BoxDashboard = ({pedidos,status,toggle,value}:IBoxDashBoard) => {

    const formatDate = (pedido : any) => {
        const date = pedido.data_entrega.replaceAll("-", "/")
        const year = date.slice(0, 4)
        const day = date.slice(8)
        const month = date.slice(4, 8)
        return `${day}${month}${year}`
    }

    const [color, setColor] = useState('')
    const changeColor = (status:string) => {
        switch(status) {
            case 'Em negociação': 
                setColor('#FF7B00')
                break
            case 'Aguardando coleta':
                setColor('#FFBF00')
                break
            case 'Em trânsito': 
                setColor('#00A3FF')
                break
            case 'Concluído':
                setColor('#2EC34F')
                break
            case 'Cancelado':
                setColor('#FF0000')
        }
    }

    useEffect(() => {
        changeColor(status)
    },[])

    return (
        <Box>
            <Header status={color}>
                <div>
                    <span></span>
                    <h1>{status}</h1>
                </div>
                <button className="ShowFretes" onClick={toggle}>
                    {value ? <Min />:<Max/>}
                </button>
            </Header>
            {pedidos.length === 0 && value === true && <p>Não há pedidos</p>}
            {pedidos.length > 0 && pedidos.map((pedido) =>
                <BoxPedido key={pedido.id} active={value}>
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
                        <Link to={`/fretes/${pedido.id}`}>Visualizar</Link>
                    </Botoes>
                </BoxPedido>
            )}
        </Box>
    )
}

export default BoxDashboard