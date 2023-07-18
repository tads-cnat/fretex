import { type MouseEvent } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { toast } from 'react-toastify';
import { ModalContraproposta } from '../';
import { ReactComponent as Done } from '../../../assets/images/Concluido.svg';
import { ReactComponent as Canceled } from '../../../assets/images/canceled.svg';
import { ReactComponent as Clock } from '../../../assets/images/clock.svg';
import { useToggle } from '../../../hooks/useToggle';
import {
  type ICliente,
  type IFreteiro,
  type IProposta,
} from '../../../interfaces';
import { type IStatusColors } from '../../../interfaces/styledComponents';
import AuthService from '../../../services/AuthService';
import ClienteService from '../../../services/ClienteService';
import FreteiroService from '../../../services/FreteiroService';
import PedidoService from '../../../services/PedidoService';
import PropostaService from '../../../services/PropostaService';
import { isFreteiro } from '../../../utils/isFreteiro';
import { Loading } from '../../utils';
import { BtnGreen, ContentMain } from './styles';

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

const formatDateAndTime = (initialDate: string): string => {
  const time = initialDate.slice(11, 16);
  const date = initialDate.slice(0, 10).replaceAll('-', '/');
  const year = date.slice(0, 4);
  const day = date.slice(8);
  const month = date.slice(4, 8);
  return `${day}${month}${year} - ${time}`;
};

export const ContentProposta = ({
  type,
  typeContent,
  proposta,
  propostasToUpdate,
  actualUser,
}: IContentProposta): JSX.Element => {
  const { toggle, value } = useToggle();
  const client = useQueryClient();

  const updatePropostaMutation = useMutation(
    ['updateProposta', proposta.id],
    async ({ id, data }: IUpdate) => await PropostaService.patch(id, data),
    {
      onSuccess: async () => {
        await client.refetchQueries('propostasForPedido');
      },
    },
  );

  const updatePedidoMutation = useMutation(
    'updateProposta',
    async ({ id, data }: IUpdate) => await PedidoService.patch(id, data),
    {
      onSuccess: async () => {
        await client.refetchQueries(['pedidosEN', 'pedidosAG']);
      },
    },
  );

  const handleAccept = (e: MouseEvent<HTMLButtonElement>): void => {
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

    formDataToStatus.append('status', `AG`);
    updatePedidoMutation.mutate({
      id: proposta.pedido,
      data: formDataToStatus,
    });

    const toUpdate = propostasToUpdate.filter((p) => proposta.id !== p.id);
    toUpdate.forEach((p) => {
      updatePropostaMutation.mutate({ id: p.id, data: formDataToCancel });
    });

    toast.success('Proposta aceita com sucesso!');
  };

  const { data: typeUser, isLoading: isLoadingTypeUser } = useQuery(
    ['TypeOfUser', proposta.id],
    async () => await AuthService.getTypeUser(proposta.usuario),
    {
      enabled: !!proposta?.usuario,
    },
  );
  //  console.log(typeUser);

  const { data: freteiro, isLoading: isLoadingFreteiro } = useQuery(
    ['UserOfProposta', proposta.usuario],
    async () => await FreteiroService.get(proposta.usuario),
    {
      enabled:
        !!proposta?.usuario &&
        !isLoadingTypeUser &&
        !!typeUser.data.extra_data.freteiro,
    },
  );

  const { data: cliente, isLoading: isLoadingCliente } = useQuery(
    ['UserOfProposta', proposta.usuario],
    async () => await ClienteService.get(proposta.usuario),
    {
      enabled:
        !!proposta?.usuario &&
        !isLoadingTypeUser &&
        !!typeUser.data.extra_data.cliente,
    },
  );

  const handleContraproposta = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    toggle();
  };
  if (isLoadingFreteiro || isLoadingCliente) return <Loading />;
  return (
    <>
      {/** <ModalMoreInfo /> */}
      <ModalContraproposta
        toggle={toggle}
        value={value}
        proposta={proposta}
        actualUser={actualUser}
        propostas={propostasToUpdate}
      />
      <ContentMain color={typeContent.color} bg={typeContent.bg}>
        <div className="valorProposta">
          {freteiro?.data?.url_foto || cliente?.data?.url_foto ? (
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
            <FaUserCircle fontSize={'1.75rem'} color={'var(--bg-grey2)'} />
          )}
          <div>
            <h4>R$ {proposta.valor}</h4>
            <p>feita em: {formatDateAndTime(proposta.data_criacao)}</p>
          </div>
        </div>
        {type === 'A responder' && (
          <div className="botoes">
            <BtnGreen onClick={handleAccept}>Aceitar</BtnGreen>
            <button className="contraproposta" onClick={handleContraproposta}>
              Contraproposta
            </button>
          </div>
        )}
        {type === 'Aceita' && (
          <div className="aceita propostaCenter">
            <Done />
            <p>Aceita</p>
          </div>
        )}
        {(type === 'Aguardando freteiro' || type === 'Aguardando cliente') && (
          <div className="espera propostaCenter">
            <Clock />
            <p>Aguardando...</p>
          </div>
        )}
        {type === 'Recusadas' && (
          <div className="recusadas propostaCenter">
            <Canceled />
            <p>recusada</p>
          </div>
        )}
      </ContentMain>
    </>
  );
};
