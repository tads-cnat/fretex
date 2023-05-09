import { useEffect, useState } from 'react';
import {
  objToQueryString,
  objToQueryStringMelhorada,
} from '../utils/queyString';
import { useMutation, useQueryClient } from 'react-query';
import useApi from './useApi';

interface IFilterFretes {
  handleChange: (e: any, tipo: any) => void;
  url: string;
  veiculos: string[];
  coleta: string[];
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

  const { mutate } = useMutation(
    'pedidosDisponiveis',
    async (url: string) =>
      await getSearchPedidos(url !== '' ? `${query}&${url}` : query),
    {
      // onSuccess: async () => {
      //   await cliente.refetchQueries('pedidosDisponiveis');
      // },
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

  return { handleChange, url, veiculos, coleta };
};

export default useFilterFretes;
