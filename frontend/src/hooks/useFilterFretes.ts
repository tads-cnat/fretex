import { useEffect, useMemo, useState } from 'react';
import {
  objToQueryString,
  objToQueryStringMelhorada,
} from '../utils/queyString';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import PedidoService from '../services/PedidoService';

interface IFilterFretes {
  handleChange: (e: any, tipo: any) => void;
  url: string;
  veiculos: string[];
  coleta: string[];
  pedidos: any;
  isLoading: boolean;
  isError: boolean;
}

const useFilterFretes = (user: any): IFilterFretes => {
  const [coleta, setColeta] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [url, setUrl] = useState('');
  const cliente = useQueryClient();

  const objeto = {
    tipo_veiculo: veiculos,
    turno_coleta: coleta,
  };

  const query = useMemo(
    () =>
      objToQueryString({
        status: 'EN',
      }),
    [],
  );

  useEffect(() => {
    setUrl(objToQueryStringMelhorada(objeto));
  }, [veiculos, coleta]);

  useEffect(() => {
    mutate(url);
  }, [url]);

  const {
    data: pedidos,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    'pedidosDisponiveis',
    async () => await PedidoService.getSearchPedidos(url !== '' ? `${query}&${url}` : query),
    {
      enabled: !(user == null),
    },
  );

  const { mutate } = useMutation(
    'PedidosDisponiveis',
    async (url: string) =>
      await PedidoService.getSearchPedidos(url !== '' ? `${query}&${url}` : query),
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

  function handleChange(e: any, tipo: any): void {
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

  return { handleChange, url, veiculos, coleta, pedidos, isLoading, isError };
};

export default useFilterFretes;
