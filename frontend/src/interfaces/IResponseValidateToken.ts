import { type IResponse } from './IResponse';

export interface IResponseValidateToken extends IResponse {
  data: {
    user: IUserRensponse;
  };
}

interface IUserRensponse {
  email: string;
  extra_data: {
    cliente: null | number;
    freteiro: null | number;
  };
  first_name: string;
  id: number;
  last_name: string;
  username: string;
}
