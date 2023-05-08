import { useEffect, useState } from 'react';
import { objToQueryStringMelhorada } from '../../../utils/queyString';
import { ContainerFilter, TypesVehicles, PeriodCollect } from './styles';

const Filter = (): JSX.Element => {
  const [coleta, setColeta] = useState([]);
  const [veiculos, setVeiculos] = useState([]);
  const [url, setUrl] = useState('');
  console.log('url:',url)

  useEffect(() => {
    const objeto = {
      tipo_veiculo: veiculos,
      turno_coleta: coleta,
    }
    console.log('objeto:',objeto)
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

  return (
    <ContainerFilter>
      <TypesVehicles>
        <h2>Tipos de Veículo</h2>
        <label>
          <input
            type="checkbox"
            name="carro"
            value="1"
            checked={veiculos.includes('1')}
            onChange={(e) => handleChange(e, 'veiculo')}
          />
          <span>Carro</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="caminhao"
            value="2"
            checked={veiculos.includes('2')}
            onChange={(e) => handleChange(e, 'veiculo')}
          />
          <span>Caminhão</span>
        </label>
      </TypesVehicles>
      <PeriodCollect>
        <h2>Turno de coleta</h2>
        <label>
          <input
            type="checkbox"
            name="matutino"
            value="matutino"
            checked={coleta.includes('matutino')}
            onChange={(e) => handleChange(e, 'coleta')}
          />
          <span>Matutino</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="vespertino"
            value="vespertino"
            checked={coleta.includes('vespertino')}
            onChange={(e) => handleChange(e, 'coleta')}
          />
          <span>Vespertino</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="noturno"
            value="noturno"
            checked={coleta.includes('noturno')}
            onChange={(e) => handleChange(e, 'coleta')}
          />
          <span>Noturno</span>
        </label>
      </PeriodCollect>
    </ContainerFilter>
  );
};

export default Filter;
