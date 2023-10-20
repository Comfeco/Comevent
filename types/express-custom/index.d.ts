interface IUserDetails {
  id: string;
  email: string;
  username: string;
}

interface IUserAuthResponse {
  user: IUserDetails;
  providerToken: string;
  providerName: string;
}
declare namespace Express {
  export interface Request {
    idUser: string;
    roleUser: string;
    user?: IUserAuthResponse;
  }
}
