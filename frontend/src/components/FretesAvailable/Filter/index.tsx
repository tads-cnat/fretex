import { useQuery } from 'react-query';
import TipoVeiculoService from '../../../services/TipoVeiculoService';
import { ContainerFilter, TypesVehicles, PeriodCollect } from './styles';

interface IFilterFretes {
  coleta: string[];
  veiculos: string[];
  handleChange: (e: any, tipo: any) => void;
}

const Filter = ({
  coleta,
  veiculos,
  handleChange,
}: IFilterFretes): JSX.Element => {
  const { data: tiposVeiculos } = useQuery(
    'tiposVeiculosDisponiveis',
    TipoVeiculoService.getAll,
  );

  return (
    <ContainerFilter>
      <TypesVehicles>
        <h2>Tipos de Veículo</h2>
        {tiposVeiculos?.data.map((tipo: any) => (
          <label key={tipo.id}>
            <input
              type="checkbox"
              name={tipo.descricao}
              value={tipo.id}
              checked={veiculos.includes(`${tipo.id}`)}
              onChange={(e) => {
                handleChange(e, 'veiculo');
              }}
            />
            <span>{tipo.descricao}</span>
          </label>
        ))}
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
