import { Card, Informacoes, Img } from './styles';
import { type IVeiculo } from '../../interfaces';
import { ReactComponent as Gota } from '../../assets/images/gota_colorir.svg';
import { ReactComponent as Info } from '../../assets/images/InfoCircle.svg';
import Placa from '../../assets/images/placaCarro.png';
import { useEffect, useState } from 'react';
import TipoVeiculoService from '../../services/TipoVeiculoService';

interface ITiposDeVeiculo {
  id: number;
  descricao: string;
}

export const CardVeiculo = ({
  veiculos,
}: {
  veiculos: IVeiculo;
}): JSX.Element => {
  const [TipoVeiculo, setTipoVeiculo] = useState<ITiposDeVeiculo>();

  useEffect(() => {
    TipoVeiculoService.get(veiculos.tipo_veiculo)
      .then((res) => {
        setTipoVeiculo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card>
      <Informacoes>
        <div className="InfoPrincipais">
          <h1>
            {veiculos.marca} - {veiculos.ano}
          </h1>
          <h2>{veiculos.modelo}</h2>
        </div>
        <div className="InfoAdicionais">
          <div>
            <Gota />
            <span>Cor: {veiculos.cor}</span>
          </div>
          <div>
            <Info />
            {TipoVeiculo != null && <span>Tipo: {TipoVeiculo?.descricao}</span>}
          </div>
          <div>
            <img src={Placa} alt="placa" />
            <span>Placa: {veiculos.placa}</span>
          </div>
        </div>
      </Informacoes>
      <div className="ImagemVeiculo">
        <Img src={veiculos.url_foto} />
      </div>
    </Card>
  );
};
