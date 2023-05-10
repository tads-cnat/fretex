import { useEffect, useState } from 'react';
import useApi from './useApi';

interface ITipoVeiculo {
  id: number;
  descricao: string;
}

const tiposDeVeiculosDefault = {
  carro: {
    descricao: 'carro',
  },

  moto: {
    descricao: 'moto',
  },

  caminhao: {
    descricao: 'caminhao',
  },
};

const useFilterVeiculos = ({
  veiculosIDs,
}: {
  veiculosIDs: string[];
}): void => {
  const [tiposDeVeiculos, setTiposDeVeiculos] = useState<ITipoVeiculo[]>([]);
  const [veiculos, setVeiculos] = useState(tiposDeVeiculosDefault);
  const { getTiposDeVeiculos } = useApi();

  useEffect(() => {
    const fetchTiposDeVeiculos = async (): Promise<void> => {
      const response = await getTiposDeVeiculos();
      setTiposDeVeiculos(response);
    };

    fetchTiposDeVeiculos()
      .then(() => {
        /*  const filteredVeiculos = veiculosIDs.filter((id) => {
          tiposDeVeiculos.find((tipo) => tipo.id === id);
        }) */
        // setVeiculos(filteredVeiculos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getTiposDeVeiculos]);

  return { tiposDeVeiculos };
};

export default useFilterVeiculos;
