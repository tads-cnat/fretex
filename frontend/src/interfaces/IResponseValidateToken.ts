import { type IResponse } from './IResponse';
import { type IUserAuthRensponse } from './IUserAuthResponse';

export interface IResponseValidateToken extends IResponse {
  data: {
    user: IUserAuthRensponse;
  };
}
