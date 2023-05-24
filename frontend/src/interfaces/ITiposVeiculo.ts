import { type IResponse } from './IResponse';

export interface ITipoVeiculo {
  id: number;
  descricao: string;
}

export interface ITiposVeiculo extends IResponse {
  data: ITipoVeiculo[];
}
