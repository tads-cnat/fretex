import React, { useEffect, useState } from "react";
import { Container, ContentHeader, ContentMain } from "./styles";
import More from "../../../assets/images/maisSVG.svg";
import ContentProposta from "../ContentProposta";
import { IProposta } from "../../../interfaces";
import useApi from "../../../hooks/useApi";
import { useQuery } from "react-query";
import { isFreteiro } from "../../../utils/isFreteiro";
import Loading from "../../Global/Loading";
import { IStatusColors } from "../../../interfaces/styledComponents";

interface ICardProposta {
  propostas: IProposta[];
  type: string;
}

const CardProposta = ({ propostas, type }: ICardProposta) => {
  const [typeCard, setTypeCard] = useState<IStatusColors>({
    color: "",
    bg: "",
  });
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

  const changeTypeCard = (type: string) => {
    switch (type) {
      case "A responder":
        setTypeCard({ color: "#868830", bg: "#F7F9B3" });
        break;
      case "Aguardando freteiro":
        setTypeCard({ color: "#7B7B7B", bg: "#E7E7E7" });
        break;
      case "Recusadas":
        setTypeCard({ color: "#DC2E2E", bg: "rgba(220, 46, 46, 0.2)" });
        break;
    }
  };

  useEffect(() => {
    changeTypeCard(type);
  }, [type]);

  return (
    <Container>
      <ContentHeader color={typeCard.color} bg={typeCard.bg}>
        <div>
          <h4>Arthur Medeiros</h4>
        </div>
        <div>
          <span>{type}</span>
          <button type="button">
            <img src={More} alt="ver mais" />
          </button>
        </div>
      </ContentHeader>
      <ContentMain>
        <ContentProposta type={type} typeContent={typeCard} />
        <ContentProposta type={type} typeContent={typeCard} />
        <ContentProposta type={type} typeContent={typeCard} />
      </ContentMain>
    </Container>
  );
};

export default CardProposta;
