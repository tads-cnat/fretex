/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from 'react';
import {
  objToQueryString,
  objToQueryStringMelhorada,
} from '../utils/queyString';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import PedidoService from '../services/PedidoService';

interface IFilterFretes {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    tipo: 'veiculo' | 'coleta',
  ) => void;
  url: string;
  veiculos: string[];
  coleta: string[];
  pedidos: any;
  isLoadingPedidos: boolean;
  isLoadingMutationPedidos: boolean;
  isErrorPedidos: boolean;
  isErrorMutationPedidos: boolean;
}

const useFilterFretes = (): IFilterFretes => {
  const [coleta, setColeta] = useState<string[]>([]);
  const [veiculos, setVeiculos] = useState<string[]>([]);
  const [url, setUrl] = useState('');
  const cliente = useQueryClient();

  const objeto = {
    tipo_veiculo__id: veiculos,
    turno_coleta: coleta,
  };

  const query = useMemo(
    () =>
      objToQueryString({
        status__in: 'EN',
      }),
    [],
  );

  const {
    data: pedidos,
    isLoading: isLoadingPedidos,
    isError: isErrorPedidos,
    refetch,
  } = useQuery(
    'pedidosDisponiveis',
    async () =>
      await PedidoService.getSearchPedidos(
        url !== '' ? `${query}&${url}` : query,
      ),
  );

  const {
    mutate,
    isLoading: isLoadingMutationPedidos,
    isError: isErrorMutationPedidos,
  } = useMutation(
    async (url: string) =>
      await PedidoService.getSearchPedidos(
        url !== '' ? `${query}&${url}` : query,
      ),
    {
      onSuccess: async () => {
        await cliente.invalidateQueries('pedidosDisponiveis');
        await refetch();
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>,
    tipo: 'veiculo' | 'coleta',
  ): void {
    if (tipo === 'veiculo') {
      if (e.target.checked) {
        setVeiculos([...veiculos, e.target.value]);
      } else {
        setVeiculos(veiculos.filter((key) => key !== e.target.value));
      }
    } else if (tipo === 'coleta') {
      if (e.target.checked) {
        setColeta([...coleta, e.target.value]);
      } else {
        setColeta(coleta.filter((key) => key !== e.target.value));
      }
    }
  }

  useEffect(() => {
    mutate(url);
  }, [url]);

  useEffect(() => {
    setUrl(objToQueryStringMelhorada(objeto));
  }, [veiculos, coleta]);

  return {
    handleChange,
    url,
    veiculos,
    coleta,
    pedidos,
    isLoadingPedidos,
    isLoadingMutationPedidos,
    isErrorPedidos,
    isErrorMutationPedidos,
  };
};

export default useFilterFretes;
