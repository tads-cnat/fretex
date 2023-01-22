import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useApi from "../../../hooks/useApi";
import { useToggle } from "../../../hooks/useToggle";
import {
  ICliente,
  IFormDataProposta,
  IFreteiro,
  IVeiculo,
} from "../../../interfaces";
import { isFreteiro } from "../../../utils/isFreteiro";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingPage from "../../Global/LoadingPage";
import ModalComponent from "../../Global/Modal";
import CardVeiculo from "../../Profile/CardVeiculo";
import LabelInput from "../../Profile/LabelInput";
import CardsContainer from "../CardsContainer";
import { BtnYellow as BtnSubmit } from "../NegociationComponent/styles";
import { schemaProposta } from "./schema";
import { ContainerVeiculos, FormContainer } from "./styles";
import { BtnYellowLinkRouter } from "../../../pages/Dashboard/styles";

interface IModalProposta {
  toggle: () => void;
  value: boolean;
  actualUser: IFreteiro | ICliente;
  pedidoId: number;
  actualUserId: number;
}

const ModalProposta = ({
  toggle,
  value,
  actualUser,
  pedidoId,
  actualUserId,
}: IModalProposta) => {
  const { getVeiculosForFreteiro } = useApi();
  const { registerProposta } = useApi();
  const { toggle: toggleCardsContainer, value: valueCardsContainer } =
    useToggle(true);
  const navigate = useNavigate();
  const { data: veiculos, isLoading: isLoadingVeiculos } = useQuery(
    "veiculosDoFreteiro",
    () => getVeiculosForFreteiro(actualUser.id),
    {
      enabled: isFreteiro(actualUser),
    },
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormDataProposta>({
    resolver: yupResolver(schemaProposta),
  });

  const onSubmit: SubmitHandler<IFormDataProposta> = (data) => {
    const proposta = {
      ...data,
      eh_aceita: false,
      ehNegada: false,
      usuario: actualUserId,
      pedido: pedidoId,
      contraproposta: null,
    };
    const formData = new FormData();

    Object.entries(proposta).forEach(([key, value]) => {
      if (value) formData.append(key, value.toString());
    });

    registerProposta(formData)
      .then(() => {
        toast.success("Proposta feita com sucesso!");
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  const handleClickRadio = () => {
    toggleCardsContainer();
  };
  console.log(veiculos);
  return (
    <ModalComponent title="Faça sua proposta" toggle={toggle} value={value}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <CardsContainer
          title="Escolha um dos seus veículos:"
          toggle={toggleCardsContainer}
          value={valueCardsContainer}
        >
          <ContainerVeiculos>
            {isLoadingVeiculos && <LoadingPage />}
            {!isLoadingVeiculos && veiculos && veiculos.data.length === 0 && (
              <div className="cadastrarVeiculo">
                <p>Você não possui veículo</p>
                <BtnYellowLinkRouter to={`/perfil/${actualUserId}/veiculos`}>
                  Casdastrar Veículo
                </BtnYellowLinkRouter>
              </div>
            )}
            {veiculos &&
              !isLoadingVeiculos &&
              veiculos.data.map((veiculo: IVeiculo) => (
                <label className="labelRadio" key={veiculo.id}>
                  <input
                    type="radio"
                    {...register("veiculo")}
                    onClick={handleClickRadio}
                    value={veiculo.id}
                  />
                  {/* tu é bom dantas resolve essa ae */}
                  <CardVeiculo veiculos={veiculo} />
                </label>
              ))}
          </ContainerVeiculos>
        </CardsContainer>

        {errors.veiculo && <p className="error">{errors.veiculo?.message}</p>}
        <div className="valorContainer">
          <span>Valor da proposta:</span>
          <LabelInput
            backgroundColorInput="#fff"
            isError={errors.valor}
            errorMessage={errors.valor?.message}
          >
            <input
              {...register("valor")}
              type="number"
              placeholder="Valor da proposta"
              style={{ color: "#000" }}
            />
          </LabelInput>
        </div>
        <div className="submitContainer">
          <BtnSubmit type="submit">Realizar proposta</BtnSubmit>
        </div>
      </FormContainer>
    </ModalComponent>
  );
};

export default ModalProposta;
