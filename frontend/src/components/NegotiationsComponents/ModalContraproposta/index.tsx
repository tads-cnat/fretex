import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import VeiculoService from '../../../services/VeiculoService';
import PropostaService from '../../../services/PropostaService';
import { useToggle } from '../../../hooks/useToggle';
import {
  type ICliente,
  type IFreteiro,
  type IProposta,
} from '../../../interfaces';
import { isFreteiro } from '../../../utils/isFreteiro';
import { CardVeiculo } from '../../CardVeiculo';
import { LabelInput } from '../../LabelInput';
import { CardsContainer } from '../';
import { FormContainer } from '../ModalProposta/styles';
import { schemaContraproposta } from './schema';
import { Button, LoadingPage, ModalComponent } from '../../utils';

interface IModal {
  toggle: () => void;
  value: boolean;
  proposta: IProposta;
  actualUser: IFreteiro | ICliente;
  propostas: IProposta[];
}

interface IContraProposta {
  valor: number;
}

interface IUpdate {
  id: number;
  data: FormData;
}

export const ModalContraproposta = ({
  toggle,
  value,
  proposta,
  actualUser,
  propostas,
}: IModal): JSX.Element => {
  const { toggle: toggleCardsContainer, value: valueCardsContainer } =
    useToggle(true);
  const client = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IContraProposta>({
    resolver: yupResolver(schemaContraproposta),
  });

  const { data: veiculo, isLoading: isLoadingVeiculo } = useQuery(
    ['veiculoDaPropostaInicial', proposta.id],
    async () => await VeiculoService.get(proposta.veiculo),
    {
      enabled: !!proposta,
    },
  );

  const registerPropostaMutation = useMutation(
    ['createProposta', proposta.id],
    async (data: FormData) =>
      await PropostaService.post(data).then((res) => res),
    {
      onSuccess: () => {
        client.refetchQueries('propostasForPedido');
      },
    },
  );

  const updatePropostaMutation = useMutation(
    ['updateProposta', proposta.id],
    async ({ id, data }: IUpdate) => await PropostaService.patch(id, data),
    {
      onSuccess: () => {
        client.refetchQueries('propostasForPedido');
      },
    },
  );

  const onSubmit: SubmitHandler<IContraProposta> = (data) => {
    const formData = new FormData();
    const formDataToCancel = new FormData();

    const contraproposta = {
      eh_aceita: false,
      ehNegada: false,
      usuario: actualUser.id,
      pedido: proposta.pedido,
      veiculo: proposta.veiculo,
      contraproposta: proposta.id,
      valor: data.valor,
      is_contraproposta: true,
      is_esperandoFreteiro: !isFreteiro(actualUser),
      is_esperandoCliente: !!isFreteiro(actualUser),
    };

    Object.entries(contraproposta).forEach(([key, value]) => {
      if (typeof value === 'boolean' && value)
        formData.append(key, value.toString());
    });

    registerPropostaMutation.mutate(formData);

    toggle();

    const propostaUpdate = {
      ehNegada: true,
      is_esperandoFreteiro: false,
      is_esperandoCliente: false,
    };

    Object.entries(propostaUpdate).forEach(([key, value]) => {
      if (value) formDataToCancel.append(key, value.toString());
    });

    const propostasToUpdate = propostas.filter(
      (p) => p.usuario === proposta.usuario,
    );

    if (propostasToUpdate.length !== 0) {
      propostasToUpdate.forEach((p) => {
        updatePropostaMutation.mutate({ id: p.id, data: formDataToCancel });
      });
    }
  };
  return (
    <ModalComponent
      title="Faça sua contraproposta"
      toggle={toggle}
      value={value}
    >
      {isLoadingVeiculo && <LoadingPage />}
      {!isLoadingVeiculo && veiculo && (
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <CardsContainer
            title={
              isFreteiro(actualUser)
                ? 'Veículo escolhido por você:'
                : 'Veículo escolhido pelo freteiro:'
            }
            toggle={toggleCardsContainer}
            value={valueCardsContainer}
          >
            <CardVeiculo veiculos={veiculo.data} />
          </CardsContainer>
          <div className="valorContainer">
            <span>Valor da contraproposta:</span>
            <LabelInput
              backgroundColorInput="#fff"
              isError={errors.valor}
              errorMessage={errors.valor?.message}
            >
              <input
                {...register('valor')}
                type="number"
                placeholder="Valor da contraproposta"
                style={{ color: '#000' }}
              />
            </LabelInput>
          </div>
          <div className="submitContainer">
            <Button isButton type="submit" isDisabled={isLoadingVeiculo}>
              Realizar proposta
            </Button>
          </div>
        </FormContainer>
      )}
    </ModalComponent>
  );
};
