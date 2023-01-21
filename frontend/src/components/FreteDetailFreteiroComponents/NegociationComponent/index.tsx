import React from "react";
import {
  AceitaContra,
  BtnGreen,
  BtnYellow,
  HeaderContainer,
  PropostaContainer2,
  ValorPerfil,
} from "./styles";
import userPhoto from "../../../assets/images/user-circle.svg";
import CardsContainer from "../CardsContainer";
import CardProposta from "../CardProposta";
import ModalProposta from "../ModalProposta/intex";
import { useToggle } from "../../../hooks/useToggle";
import { ICliente, IFreteiro } from "../../../interfaces";

interface INegociation {
  actualUser: IFreteiro | ICliente;
  pedidoId: number;
}

const NegociationComponent = ({ actualUser, pedidoId }: INegociation) => {
  const { toggle: toggleModalProposta, value: valueModalProposta } =
    useToggle();
  const { toggle: togglePropostasAtivas, value: valuePropostasAtivas } =
    useToggle(true);
  const { toggle: togglePropostasEsperando, value: valuePropostasEsperando } =
    useToggle(true);
  const { toggle: togglePropostasCanceladas, value: valuePropostasCanceladas } =
    useToggle(true);

  const handleClick = (e: any) => {
    e.preventDefault();
    toggleModalProposta();
  };

  return (
    <>
      <ModalProposta
        toggle={toggleModalProposta}
        value={valueModalProposta}
        actualUser={actualUser}
        actualUserId={actualUser.id}
        pedidoId={pedidoId}
      />
      <HeaderContainer>
        <div>
          <h2>Negociação</h2>
          <p>Aguardando freteiro</p>
        </div>
        <BtnYellow type="button" onClick={handleClick}>
          Realizar Proposta
        </BtnYellow>
      </HeaderContainer>
      <PropostaContainer2>
        <div>
          <CardsContainer
            title="Propostas ativas"
            toggle={togglePropostasAtivas}
            value={valuePropostasAtivas}
          >
            <CardProposta />
          </CardsContainer>
        </div>
        <CardsContainer
          title="Propostas esperando resposta"
          toggle={togglePropostasEsperando}
          value={valuePropostasEsperando}
        >
          <CardProposta />
        </CardsContainer>
        <CardsContainer
          title="Propostas recusadas"
          toggle={togglePropostasCanceladas}
          value={valuePropostasCanceladas}
        >
          <CardProposta />
        </CardsContainer>

        {/**
        <ValorPerfil>
          <img src={userPhoto} alt="avatar-user" />
          <div>
            <h3>R$ 270,00</h3>
            <p>feita em: dd/mm/yyyy</p>
          </div>
        </ValorPerfil> 
        <AceitaContra>
          <BtnGreen to="/aceitar-proposta-freteiro">Aceitar</BtnGreen>
          <h4>Contraproposta</h4>
        </AceitaContra>*/}
      </PropostaContainer2>
    </>
  );
};

export default NegociationComponent;
