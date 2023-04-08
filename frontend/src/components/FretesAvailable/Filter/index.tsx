import { ContainerFilter, TypesVehicles, PeriodCollect } from './styles';

const Filter = (): JSX.Element => {
  return (
    <ContainerFilter>
      <TypesVehicles>
        <h2>Tipos de Veículo</h2>
        <label>
          <input type="checkbox" name="carro" value="carro" />
          <span>Carro</span>
        </label>
        <label>
          <input type="checkbox" name="Caminhão" value="Caminhão" />
          <span>Caminhão</span>
        </label>
      </TypesVehicles>
      <PeriodCollect>
        <h2>Turno de coleta</h2>
        <label>
          <input type="checkbox" name="matutino" value="matutino" />
          <span>Matutino</span>
        </label>
        <label>
          <input type="checkbox" name="vespertino" value="vespertino" />
          <span>Vespertino</span>
        </label>
        <label>
          <input type="checkbox" name="noturno" value="noturno" />
          <span>Noturno</span>
        </label>
      </PeriodCollect>
    </ContainerFilter>
  );
};

export default Filter;
