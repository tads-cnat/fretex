import { useEffect, useState } from 'react';
import { Container, ContentHeader, ContentMain } from './styles';
import More from '../../../assets/images/maisSVG.svg';
import { ContentProposta } from '../';
import {
  type ICliente,
  type IFreteiro,
  type IProposta,
} from '../../../interfaces';
import FreteiroService from '../../../services/FreteiroService';
import { useQuery } from 'react-query';
import { isFreteiro } from '../../../utils/isFreteiro';
import { Loading } from '../../utils';
import { type IStatusColors } from '../../../interfaces/styledComponents';

interface ICardProposta {
  propostas: IProposta[];
  OwnerPropostasId: number;
  pedidoId: number;
  ownerPedido: number;
  actualUser: ICliente | IFreteiro;
}

export const CardProposta = ({
  propostas,
  OwnerPropostasId,
  pedidoId,
  ownerPedido,
  actualUser,
}: ICardProposta): JSX.Element => {
  const [typeCard, setTypeCard] = useState<IStatusColors>({
    color: '',
    bg: '',
  });
  const [type, setType] = useState<
    | 'A responder'
    | 'Aceita'
    | 'Aguardando freteiro'
    | 'Aguardando cliente'
    | 'Recusadas'
    | ''
  >('');

  let propostasFiltradas: IProposta[] = [];
  propostasFiltradas = propostas.filter(
    (p) =>
      (p.usuario === OwnerPropostasId ||
        p.contraproposta === p.id ||
        p.usuario === ownerPedido) &&
      p.pedido === pedidoId,
  );
  const ultimoProposta = propostasFiltradas.slice(-1);

  const ultimoVeiculo = ultimoProposta[0].veiculo;

  propostasFiltradas = propostasFiltradas.filter(
    (p) => p.veiculo === ultimoVeiculo,
  );

  // console.log(propostasFiltradas);

  let propostasRecusadasForFreteiro: IProposta[] = [];
  propostasRecusadasForFreteiro = propostasFiltradas.filter(
    (p) => p.ehNegada === true,
  );

  let propostasEsperandoForCliente: IProposta[] = [];
  propostasEsperandoForCliente = propostasFiltradas.filter(
    (p) =>
      p.is_esperandoCliente &&
      !p.is_esperandoFreteiro &&
      !p.ehNegada &&
      !p.eh_aceita,
  );

  let propostasEsperandoForFreteiro: IProposta[] = [];
  propostasEsperandoForFreteiro = propostasFiltradas.filter(
    (p) =>
      !p.is_esperandoCliente &&
      p.is_esperandoFreteiro &&
      !p.ehNegada &&
      !p.eh_aceita,
  );

  let propostaAceitaForFreteiro: IProposta[] = [];
  propostaAceitaForFreteiro = propostasFiltradas.filter((p) => p.eh_aceita);

  const { data: userOwnerProposta, isLoading: isLoadingUserOwnerProposta } =
    useQuery(
      ['propostasOwner', OwnerPropostasId],
      async () => await FreteiroService.get(OwnerPropostasId),
      {
        enabled: !isNaN(OwnerPropostasId),
      },
    );

  const changeTypeCard = (type: string): void => {
    switch (type) {
      case 'A responder':
      case 'Aceita':
        setTypeCard({ color: '#868830', bg: '#F7F9B3' });
        break;
      case 'Aguardando freteiro':
      case 'Aguardando cliente':
        setTypeCard({ color: '#7B7B7B', bg: '#E7E7E7' });
        break;
      case 'Recusadas':
        setTypeCard({ color: '#DC2E2E', bg: 'rgba(220, 46, 46, 0.2)' });
        break;
    }
  };

  const chooseType = (): void => {
    if (propostaAceitaForFreteiro.length > 0) {
      setType('Aceita');
    } else if (propostasRecusadasForFreteiro.length > 0) {
      setType('Recusadas');
    }
  };

  useEffect(() => {
    chooseType();
    changeTypeCard(type);
  }, [type]);

  //console.log(propostasEsperandoForFreteiro);
  if (isLoadingUserOwnerProposta) return <Loading />;
  return (
    <Container>
      <ContentHeader color={typeCard.color} bg={typeCard.bg}>
        <div>
          <h4>
            {userOwnerProposta?.data.first_name}{' '}
            {userOwnerProposta?.data.last_name}
          </h4>
        </div>
        <div>
          {/** <span>{type}</span> */}
          <button type="button">
            <img src={More} alt="ver mais" />
          </button>
        </div>
      </ContentHeader>
      <ContentMain>
        {propostaAceitaForFreteiro.length !== 0 &&
          propostaAceitaForFreteiro.map((proposta) => (
            <ContentProposta
              key={proposta.id}
              type="Aceita"
              typeContent={{ color: '#868830', bg: '#F7F9B3' }}
              proposta={proposta}
              propostasToUpdate={propostas}
              actualUser={actualUser}
            />
          ))}

        {isFreteiro(actualUser)
          ? propostasEsperandoForFreteiro.map((proposta) => (
              <ContentProposta
                key={proposta.id}
                type="A responder"
                typeContent={{ color: '#868830', bg: '#F7F9B3' }}
                proposta={proposta}
                propostasToUpdate={propostas}
                actualUser={actualUser}
              />
            ))
          : propostasEsperandoForFreteiro.map((proposta) => (
              <ContentProposta
                key={proposta.id}
                type="Aguardando freteiro"
                typeContent={{ color: '#868830', bg: '#F7F9B3' }}
                proposta={proposta}
                propostasToUpdate={propostas}
                actualUser={actualUser}
              />
            ))}

        {isFreteiro(actualUser)
          ? propostasEsperandoForCliente.map((proposta) => (
              <ContentProposta
                key={proposta.id}
                type="Aguardando cliente"
                typeContent={{ color: '#7B7B7B', bg: '#E7E7E7' }}
                proposta={proposta}
                propostasToUpdate={propostas}
                actualUser={actualUser}
              />
            ))
          : propostasEsperandoForCliente.map((proposta) => (
              <ContentProposta
                key={proposta.id}
                type="A responder"
                typeContent={{ color: '#7B7B7B', bg: '#E7E7E7' }}
                proposta={proposta}
                propostasToUpdate={propostas}
                actualUser={actualUser}
              />
            ))}

        {propostasRecusadasForFreteiro.length !== 0 &&
          propostasRecusadasForFreteiro.map((proposta) => (
            <ContentProposta
              key={proposta.id}
              type="Recusadas"
              typeContent={{ color: '#DC2E2E', bg: 'rgba(220, 46, 46, 0.2)' }}
              proposta={proposta}
              propostasToUpdate={propostas}
              actualUser={actualUser}
            />
          ))}
      </ContentMain>
    </Container>
  );
};
