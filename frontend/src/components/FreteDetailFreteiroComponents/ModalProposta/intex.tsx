import React, { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../../../context/Auth/AuthContext";
import useApi from "../../../hooks/useApi";
import { ICliente, IFreteiro, IVeiculo } from "../../../interfaces";
import { isFreteiro } from "../../../utils/isFreteiro";
import LoadingPage from "../../Global/LoadingPage";
import ModalComponent from "../../Global/Modal";
import CardVeiculo from "../../Profile/CardVeiculo";
import CardsContainer from "../CardsContainer";
import { ConteinerVeiculos } from "./styles";

interface IModalProposta {
  toggle: () => void;
  value: boolean;
  actualUser: IFreteiro | ICliente;
}

const ModalProposta = ({ toggle, value, actualUser }: IModalProposta) => {
  const { getVeiculosForFreteiro } = useApi();

  const {
    data: veiculos,
    isLoading: isLoadingVeiculos,
    isError,
  } = useQuery(
    "veiculosDoFreteiro",
    () => getVeiculosForFreteiro(actualUser.id),
    {
      enabled: isFreteiro(actualUser),
    },
  );

  return (
    <ModalComponent title="Faça sua proposta" toggle={toggle} value={value}>
      <CardsContainer title="Escolha um dos seus veículos:">
        <form>
          <ConteinerVeiculos>
            {isLoadingVeiculos && <LoadingPage />}
            {veiculos &&
              !isLoadingVeiculos &&
              veiculos.data.map((veiculo: IVeiculo, index: number) => (
                <label className="labelRadio">
                  <input type="radio" />
                  {/* tu é bom dantas resolve essa ae */}
                  <CardVeiculo key={veiculo.id} veiculos={veiculo} />
                </label>
              ))}
          </ConteinerVeiculos>
        </form>
      </CardsContainer>
    </ModalComponent>
  );
};

export default ModalProposta;
