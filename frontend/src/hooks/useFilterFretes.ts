import { useEffect, useState } from 'react';
import {
  objToQueryString,
  objToQueryStringMelhorada,
} from '../utils/queyString';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import useApi from './useApi';

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
  const { getSearchPedidos } = useApi();
  const cliente = useQueryClient();

  useEffect(() => {
    const objeto = {
      tipo_veiculo: veiculos,
      turno_coleta: coleta,
    };
    setUrl(objToQueryStringMelhorada(objeto));
  }, [veiculos, coleta]);

  useEffect(() => {
    mutate(url);
  }, [url]);

  const query = objToQueryString({
    status: 'EN',
  });

  const {
    data: pedidos,
    isLoading,
    isError,
    refetch,
  } = useQuery(
    'pedidosDisponiveis',
    async () => await getSearchPedidos(url !== '' ? `${query}&${url}` : query),
    {
      enabled: !(user == null),
    },
  );

  const { mutate } = useMutation(
    'PedidosDisponiveis',
    async (url: string) =>
      await getSearchPedidos(url !== '' ? `${query}&${url}` : query),
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
