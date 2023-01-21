import React, { useEffect, useState } from "react";
import { Container, ContentHeader, ContentMain } from "./styles";
import  More from "../../../assets/images/maisSVG.svg";
import ContentProposta from "../ContentProposta";

interface ICardProposta {
    proposta?: any;
    type: string;
}

const CardProposta = () => {
  const [typeCard, setTypeCard] = useState();
/*
  useEffect(() => {
    const setType = () => {
        switch (type) {
            case "":
                
                break;
        
            default:
                break;
        }
    }
  }, [])
*/

  return (
    <Container>
      <ContentHeader>
        <div>
          <h4>Arthur Medeiros</h4>
        </div>
        <div>
          <span>A responder</span>
          <button type="button">
            <img src={More} alt="ver mais" />
          </button>
        </div>
      </ContentHeader>
      <ContentMain>
        <ContentProposta />
        <ContentProposta />
        <ContentProposta />
      </ContentMain>
    </Container>
  );
};

export default CardProposta;
