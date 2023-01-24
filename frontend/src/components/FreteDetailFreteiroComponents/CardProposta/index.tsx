import React, { useEffect, useState } from "react";
import { Container, ContentHeader, ContentMain } from "./styles";
import More from "../../../assets/images/maisSVG.svg";
import ContentProposta from "../ContentProposta";
import { IProposta } from "../../../interfaces";
import useApi from "../../../hooks/useApi";
import { useQuery } from "react-query";
import { isFreteiro } from "../../../utils/isFreteiro";
import Loading from "../../Global/Loading";

interface ICardProposta {
  propostas: IProposta[];
  type?: string;
}

const CardProposta = ({ propostas, type }: ICardProposta) => {
  const [typeCard, setTypeCard] = useState();
  const { getUser, getFreteiro } = useApi();
/*
  const { data: userProposta, isLoading: isLoadingUserProposta } = useQuery(
    "pedidoCreatedBy",
    () => getFreteiro(propostas[0].usuario),
    {
      enabled: !!propostas,
    },
  );
  console.log(userProposta);*/
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
 // if (isLoadingUserProposta) return <Loading />;
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
