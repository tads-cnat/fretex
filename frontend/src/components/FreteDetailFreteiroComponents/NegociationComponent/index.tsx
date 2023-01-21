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
}

const NegociationComponent = ({actualUser}:INegociation) => {
  const { toggle, value } = useToggle();

  const handleClick = (e: any) => {
    e.preventDefault();
    toggle();
  };

  return (
    <>
      <ModalProposta toggle={toggle} value={value} actualUser={actualUser} />
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
          <CardsContainer title="Propostas ativas">
            <CardProposta />
          </CardsContainer>
        </div>
        <CardsContainer title="Propostas esperando resposta">
          <CardProposta />
        </CardsContainer>
        <CardsContainer title="Propostas recusadas">
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
