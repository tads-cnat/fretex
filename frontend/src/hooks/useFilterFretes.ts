import { useEffect, useState } from 'react'
import { objToQueryStringMelhorada } from '../utils/queyString';

interface IFilterFretes {
  handleChange: (e: any, tipo: any,) => void;
  url: string;
  veiculos: string[];
  coleta: string[];
}

const useFilterFretes = ():IFilterFretes => {
  const [coleta, setColeta] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const objeto = {
      tipo_veiculo: veiculos,
      turno_coleta: coleta,
    }
    setUrl(objToQueryStringMelhorada(objeto))
  }, [veiculos, coleta])
  
  function handleChange(e, tipo) {
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
  return { handleChange, url, veiculos, coleta }
}

export default useFilterFretes