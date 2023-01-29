import React from "react";
import { BtnGreen, ContentMain } from "./styles";
import { ReactComponent as Perfil } from "../../../assets/images/perfil.svg";
import { ReactComponent as Clock } from "../../../assets/images/clock.svg";
import { ReactComponent as Canceled } from "../../../assets/images/canceled.svg";
import { ReactComponent as Done } from "../../../assets/images/Concluido.svg";

import { IStatusColors } from "../../../interfaces/styledComponents";
import { ICliente, IFreteiro, IProposta } from "../../../interfaces";
import useApi from "../../../hooks/useApi";
import { useMutation, useQuery, useQueryClient } from "react-query";
import ModalContraproposta from "../ModalContraproposta";
import { useToggle } from "../../../hooks/useToggle";
import { toast } from "react-toastify";
import { isFreteiro } from "../../../utils/isFreteiro";
import Loading from "../../Global/Loading";
import ModalMoreInfo from "../ModalMoreInfo";

interface IContentProposta {
  type: string;
  typeContent: IStatusColors;
  proposta: IProposta;
  propostasToUpdate: IProposta[];
  actualUser: IFreteiro | ICliente;
}

interface IUpdate {
  id: number;
  data: FormData;
}

const ContentProposta = ({
  type,
  typeContent,
  proposta,
  propostasToUpdate,
  actualUser,
}: IContentProposta) => {
  const { toggle, value } = useToggle();
  const { updateProposta, updatePedido, getFreteiro, getCliente, getTypeUser } =
    useApi();
  const client = useQueryClient();
  const updatePropostaMutation = useMutation(
    ["updateProposta", proposta.id],
    ({ id, data }: IUpdate) => updateProposta(id, data),
    {
      onSuccess: () => {
        client.refetchQueries("propostasForPedido");
      },
    },
  );

  const updatePedidoMutation = useMutation(
    "updateProposta",
    ({ id, data }: IUpdate) => updatePedido(id, data),
    {
      onSuccess: () => {
        client.refetchQueries(["pedidosEN", "pedidosAG"]);
      },
    },
  );

  const handleClick = (e: any) => {
    e.preventDefault();
    const formDataToFinish = new FormData();
    const formDataToCancel = new FormData();
    const formDataToStatus = new FormData();
    const updatedData = {
      eh_aceita: true,
      is_esperandoCliente: false,
      is_esperandoFreteiro: false,
    };

    const updateToCancel = {
      is_esperandoCliente: false,
      is_esperandoFreteiro: false,
      ehNegada: true,
    };

    Object.entries(updatedData).forEach(([key, value]) => {
      formDataToFinish.append(key, `${value}`);
    });

    Object.entries(updateToCancel).forEach(([key, value]) => {
      formDataToCancel.append(key, `${value}`);
    });

    updatePropostaMutation.mutate({ id: proposta.id, data: formDataToFinish });

    formDataToStatus.append("status", `AG`);
    updatePedidoMutation.mutate({
      id: proposta.pedido,
      data: formDataToStatus,
    });

    const toUpdate = propostasToUpdate.filter((p) => proposta.id !== p.id);
    toUpdate.forEach((p) => {
      updatePropostaMutation.mutate({ id: p.id, data: formDataToCancel });
    });

    toast.success("Proposta aceita com sucesso!");
  };

  const { data: typeUser, isLoading: isLoadingTypeUser } = useQuery(
    ["TypeOfUser", proposta.id],
    () => getTypeUser(proposta.usuario),
    {
      enabled: !!proposta?.usuario,
    },
  );
  //  console.log(typeUser);

  const { data: freteiro, isLoading: isLoadingFreteiro } = useQuery(
    ["UserOfProposta", proposta.usuario],
    () => getFreteiro(proposta.usuario),
    {
      enabled:
        !!proposta?.usuario &&
        !isLoadingTypeUser &&
        !!typeUser.data.extra_data.freteiro,
    },
  );

  const { data: cliente, isLoading: isLoadingCliente } = useQuery(
    ["UserOfProposta", proposta.usuario],
    () => getCliente(proposta.usuario),
    {
      enabled:
        !!proposta?.usuario &&
        !isLoadingTypeUser &&
        !!typeUser.data.extra_data.cliente,
    },
  );
 // console.log(cliente);

  const formatDateAndTime = (initialDate: string) => {
    const time = initialDate.slice(11, 16);
    const date = initialDate.slice(0, 10).replaceAll("-", "/");
    const year = date.slice(0, 4);
    const day = date.slice(8);
    const month = date.slice(4, 8);
    return `${day}${month}${year} - ${time}`;
  };

  const handleContraproposta = (e: any) => {
    e.preventDefault();
    toggle();
  };
  if (isLoadingFreteiro || isLoadingCliente) return <Loading />;
  return (
    <>
      {/**<ModalMoreInfo /> */}
      <ModalContraproposta
        toggle={toggle}
        value={value}
        proposta={proposta}
        actualUser={actualUser}
        propostas={propostasToUpdate}
      />
      <ContentMain color={typeContent.color} bg={typeContent.bg}>
        <div className="valorProposta">
          {freteiro || cliente ? (
            <img
              src={
                isFreteiro(freteiro.data)
                  ? freteiro.data.url_foto
                  : cliente.data.url_foto
              }
              alt={
                isFreteiro(freteiro.data)
                  ? freteiro.data.first_name
                  : cliente.data.first_name
              }
              className="imgPerfil"
            />
          ) : (
            <Perfil />
          )}
          <div>
            <h4>R$ {proposta.valor}</h4>
            <p>feita em: {formatDateAndTime(proposta.data_criacao)}</p>
          </div>
        </div>
        {type === "A responder" && (
          <div className="botoes">
            <BtnGreen onClick={handleClick}>Aceitar</BtnGreen>
            <button className="contraproposta" onClick={handleContraproposta}>
              Contraproposta
            </button>
          </div>
        )}
        {type === "Aceita" && (
          <div className="aceita propostaCenter">
            <Done />
            <p>Aceita</p>
          </div>
        )}
        {(type === "Aguardando freteiro" || type === "Aguardando cliente") && (
          <div className="espera propostaCenter">
            <Clock />
            <p>Aguardando...</p>
          </div>
        )}
        {type === "Recusadas" && (
          <div className="recusadas propostaCenter">
            <Canceled />
            <p>recusada</p>
          </div>
        )}
      </ContentMain>
    </>
  );
};

export default ContentProposta;
