import BoxDashboard from "../../components/Dashboard"
import Layout from "../../components/Layout"
import { Wrapper } from "../../styles"
import { BtnYellow, Filter, Title, ContainerPedidos } from "./styles"
import useApi from "../../hooks/useApi";
import { useContext, useEffect, useState } from "react";
import { IPedido } from "../../interfaces";
import { useToggle } from "../../hooks/useToggle";
import { AuthContext } from "../../context/Auth/AuthContext";

function objToQueryString(obj: any) {
    const keyValuePairs = [];
    for (const key in obj) {
        keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
}

const Dashboard = () => {
    const { user } = useContext(AuthContext)

    const [pedidosEN, setpedidosEN] = useState<IPedido[]>([])
    const [pedidosAG, setpedidosAG] = useState<IPedido[]>([])
    const [pedidosTR, setpedidosTR] = useState<IPedido[]>([])
    const [pedidosCO, setpedidosCO] = useState<IPedido[]>([])
    const [pedidosCA, setpedidosCA] = useState<IPedido[]>([])
    const { getSearchPedidos } = useApi()

    const { toggle: toggleNegociacao, value: valueNegociacao } = useToggle(true)
    const { toggle: toggleAguardandoColeta, value: valueAguardandoColeta } = useToggle()
    const { toggle: toggleEmTransito, value: valueEmTransito } = useToggle()
    const { toggle: toggleConcluido, value: valueConcluido } = useToggle()
    const { toggle: toggleCancelado, value: valueCancelado } = useToggle()


    useEffect(() => {
        if (user) {
            const queryStringEN = objToQueryString({
                cliente: `${user?.id}`,
                status: "EN"
            })
            Promise.all([getSearchPedidos(queryStringEN)])
                .then((res) => {
                    console.log(res)
                    setpedidosEN(res[0].data)

                })
                .catch(() => console.log("erro nos teus pedidos"))
        }
    }, [user])

    return (
        <Layout >
            <Wrapper style={{ minHeight: '80vh' }}>
                <Title>Dashboard</Title>
                <Filter>
                    <span>Fretes dos últimos 30 dias</span>
                    <div>
                        <button className="concluidos">Ver todos os concluídos</button>
                        <BtnYellow>Buscar novos fretes</BtnYellow>
                    </div>
                </Filter>
                <ContainerPedidos>
                    <div className={"containers"}>
                        <BoxDashboard pedidos={pedidosEN} toggle={toggleNegociacao} value={valueNegociacao} status='Em negociação' />
                        <BoxDashboard pedidos={pedidosAG} toggle={toggleAguardandoColeta} value={valueAguardandoColeta} status='Aguardando coleta' />
                    </div>
                    <div className={"containers"}>
                        <BoxDashboard pedidos={pedidosTR} toggle={toggleEmTransito} value={valueEmTransito} status='Em trânsito' />
                        <BoxDashboard pedidos={pedidosCO} toggle={toggleConcluido} value={valueConcluido} status='Concluído' />
                        <BoxDashboard pedidos={pedidosCA} toggle={toggleCancelado} value={valueCancelado} status='Cancelado' />
                    </div>
                </ContainerPedidos>
            </Wrapper>
        </Layout>
    )
}

export default Dashboard