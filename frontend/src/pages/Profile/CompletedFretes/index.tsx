import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BoxFretes } from '../../../components/BoxFretes';
import { AuthContext } from '../../../context/Auth/AuthContext';
import { type IPedido } from '../../../interfaces';
import PedidoService from '../../../services/PedidoService';
import { toast } from 'react-toastify';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CompletedFretes = (): JSX.Element => {
  const [fretes, setFretes] = useState<IPedido[]>([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    PedidoService.getAll()
      .then((res) => {
        setFretes(
          res.data.filter(
            (pedido: IPedido) =>
              pedido.cliente === user?.id && pedido.status === 'CO',
          ),
        );
      })
      .catch(() => {
        toast.error('Erro ao carregar fretes');
      });
  }, []);

  if (user == null) return <p>Carregando...</p>;
  return (
    <>
      {fretes.length === 0 && (
        <Container>Não possui fretes realizados</Container>
      )}
      {fretes && (
        <Content>
          {fretes.map((frete) => (
            <BoxFretes key={frete.id} pedido={frete} />
          ))}
        </Content>
      )}
    </>
  );
};

export default CompletedFretes;
