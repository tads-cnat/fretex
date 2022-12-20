import BoxDashboard from "../../components/Dashboard"
import Layout from "../../components/Layout"
import { Wrapper } from "../../styles"
import { BtnYellow, Filter, Title, ContainerPedidos } from "./styles"
import useApi from "../../hooks/useApi";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces";

const Dashboard = () => {
    const [pedidos, setPedidos] = useState<IPedido[]>([])
    const { getPedidos } = useApi()

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
                        <BoxDashboard pedidos={pedidos} />
                        <BoxDashboard pedidos={pedidos} />
                    </div>
                    <div className={"containers"}>
                        <BoxDashboard pedidos={pedidos} />
                        <BoxDashboard pedidos={pedidos} />
                        <BoxDashboard pedidos={pedidos} />
                    </div>
                </ContainerPedidos>
            </Wrapper>
        </Layout>
    )
}

export default Dashboard