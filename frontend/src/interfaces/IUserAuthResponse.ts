export interface IUserAuthRensponse {
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
