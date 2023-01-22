import React from "react";
import { BtnGreen, ContentMain } from "./styles";
import { ReactComponent as Perfil } from "../../../assets/images/perfil.svg";
const ContentProposta = () => {
  return (
    <ContentMain>
      <div className="valorProposta">
        <Perfil />
        <div>
          <h4>R$ 270,00</h4>
          <p>feita em: 20/10/2022</p>
        </div>
      </div>
      <div className="botoes">
        <BtnGreen>Aceitar</BtnGreen>
        <button className="contraproposta">Contraproposta</button>
      </div>
    </ContentMain>
  );
};

export default ContentProposta;
