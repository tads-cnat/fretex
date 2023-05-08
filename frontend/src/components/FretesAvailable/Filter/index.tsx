import { ContainerFilter, TypesVehicles, PeriodCollect } from './styles';

interface IFilterFretes {
  handleChange: (e: any, tipo: any,) => void;
  veiculos: string[];
  coleta: string[];
}

const Filter = ({coleta,handleChange,veiculos}:IFilterFretes): JSX.Element => {

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
