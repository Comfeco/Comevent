interface IUserAuthResponse {
  id: string;
  email: string;
  username: string;
}
declare namespace Express {
  export interface Request {
    idUser: string;
    roleUser: string;
    user?: IUserAuthResponse;
  }
}
