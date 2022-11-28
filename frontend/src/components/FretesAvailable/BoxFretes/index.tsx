import {
  ContainerMain,
  ContainerInfoBtn,
  ContainerInfos,
  ContainerEndereco,
  End,
  Seta,
  ContainerCalendar,
  ContainerImgMain,
  ContainerImg,
  BtnYellow,
} from "./styles";
import caixa from "../../../assets/images/caixas.png";
import Loc from "../../../assets/images/geo-alt.svg";
import Arrow from "../../../assets/images/arrow-right.svg";
import Calendar from "../../../assets/images/calendar.svg";
import { ICliente, IPedido } from "../../../interfaces";
import useApi from "../../../hooks/useApi";
import { useEffect, useState } from "react";

const BoxFretes = ({ pedido }: { pedido: IPedido }) => {
  const [user, setUser] = useState<ICliente>();
  const { getUser } = useApi();

  useEffect(() => {
    getUser(pedido?.cliente).then((res) => setUser(res.data));
  }, []);

  return (
    <ContainerMain>
      <ContainerInfoBtn>
        <ContainerInfos>
          <p>{user?.username}</p>
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
            <span>Entregar até {pedido.data_entrega}</span>
          </ContainerCalendar>
        </ContainerInfos>
        <BtnYellow>Negociar</BtnYellow>
      </ContainerInfoBtn>
      <ContainerImgMain>
        <ContainerImg src={caixa} alt="caixas" />
      </ContainerImgMain>
    </ContainerMain>
  );
};

export default BoxFretes;
