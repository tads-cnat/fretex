import React from "react";
import { BtnGreen, ContentMain } from "./styles";
import { ReactComponent as Perfil } from "../../../assets/images/perfil.svg";
import { ReactComponent as Clock } from "../../../assets/images/clock.svg";
import { ReactComponent as Canceled } from "../../../assets/images/canceled.svg";
import { IStatusColors } from "../../../interfaces/styledComponents";

interface IContentProposta {
  type: string;
  typeContent: IStatusColors;
}

const ContentProposta = ({ type, typeContent }: IContentProposta) => {
  return (
    <ContentMain color={typeContent.color} bg={typeContent.bg}>
      <div className="valorProposta">
        <Perfil />
        <div>
          <h4>R$ 270,00</h4>
          <p>feita em: 20/10/2022</p>
        </div>
      </div>
      {type === "A responder" && (
        <div className="botoes">
          <BtnGreen>Aceitar</BtnGreen>
          <button className="contraproposta">Contraproposta</button>
        </div>
      )}
      {type === "Aguardando freteiro" && (
        <div className="espera propostaCenter">
          <Clock />
          <p>Aguardando...</p>
        </div>
      )}
      {type === "Recusadas" && (
        <div className="recusadas propostaCenter">
          <Canceled />
          <p>recusadas</p>
        </div>
      )}
    </ContentMain>
  );
};

export default ContentProposta;
