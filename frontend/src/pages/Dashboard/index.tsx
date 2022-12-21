import BoxDashboard from "../../components/Dashboard"
import Layout from "../../components/Layout"
import { Wrapper } from "../../styles"
import { BtnYellow, Filter, Title, ContainerPedidos } from "./styles"
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces";
import { useToggle } from "../../hooks/useToggle";

const Dashboard = () => {
    const [pedidos, setPedidos] = useState<IPedido[]>([])
    const { getPedidos } = useApi()

    const {toggle:toggleNegociacao, value:valueNegociacao} = useToggle()
    const {toggle:toggleAguardandoColeta, value:valueAguardandoColeta} = useToggle()
    const {toggle:toggleEmTransito, value:valueEmTransito} = useToggle()
    const {toggle:toggleConcluido, value:valueConcluido} = useToggle()
    const {toggle:toggleCancelado, value:valueCancelado} = useToggle()


    useEffect(() => {
        getPedidos()
            .then((res) => {
                setPedidos(res.data)
            })
            .catch(() => console.log("erro nos teus pedidos"))
    }, [])

    return (
        <Layout>
            <Wrapper>
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
                        <BoxDashboard pedidos={pedidos} toggle={toggleNegociacao} value={valueNegociacao} status='Em negociacao'/>
                        <BoxDashboard pedidos={pedidos} toggle={toggleAguardandoColeta} value={valueAguardandoColeta} status='Aguardando coleta'/>
                    </div>
                    <div className={"containers"}>
                        <BoxDashboard pedidos={pedidos} toggle={toggleEmTransito} value={valueEmTransito} status='Em transito'/>
                        <BoxDashboard pedidos={pedidos} toggle={toggleConcluido} value={valueConcluido} status='Concluido'/>
                        <BoxDashboard pedidos={pedidos} toggle={toggleCancelado} value={valueCancelado} status='Cancelado'/>
                    </div>
                </ContainerPedidos>
            </Wrapper>
        </Layout>
    )
}

export default Dashboard