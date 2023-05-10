import { ContainerFilter, TypesVehicles, PeriodCollect } from './styles';

interface IFilterFretes {
  coleta: string[];
  veiculos: string[];
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    tipo: 'coleta' | 'veiculo',
  ) => void;
}

const Filter = ({
  coleta,
  veiculos,
  handleChange,
}: IFilterFretes): JSX.Element => {
  console.log(veiculos)
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
            onChange={(e) => {
              handleChange(e, 'veiculo');
            }}
          />
          <span>Carro</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="caminhao"
            value="2"
            checked={veiculos.includes('2')}
            onChange={(e) => {
              handleChange(e, 'veiculo');
            }}
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
            value="MA"
            checked={coleta.includes('MA')}
            onChange={(e) => {
              handleChange(e, 'coleta');
            }}
          />
          <span>Matutino</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="vespertino"
            value="TA"
            checked={coleta.includes('TA')}
            onChange={(e) => {
              handleChange(e, 'coleta');
            }}
          />
          <span>Vespertino</span>
        </label>
        <label>
          <input
            type="checkbox"
            name="noturno"
            value="NO"
            checked={coleta.includes('NO')}
            onChange={(e) => {
              handleChange(e, 'coleta');
            }}
          />
          <span>Noturno</span>
        </label>
      </PeriodCollect>
    </ContainerFilter>
  );
};

export default Filter;
