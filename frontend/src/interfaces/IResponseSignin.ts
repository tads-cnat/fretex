import { type IResponse } from './IResponse';
import { type IUserAuthRensponse } from './IUserAuthResponse';

export interface IResponseSignin extends IResponse {
  data: {
    token: string;
    user: IUserAuthRensponse;
  };
}
