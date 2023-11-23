import { IUser } from './login.types';

export interface IRegisterData {
  email: string;
  username: string;
  password?: string;
  areasOfInterest?: number[];
}
export interface IUserResponse {
  email: string;
  username: string;
  id: string;
}

export interface IRegisterResponse {
  Register_User: IUser;
}

export interface IAreaOfInterest {
  id: number;
  name: string;
  key: string;
}

export interface ITokenResponse {
  token: string;
}

export interface IClaimsInfo {
  id: string;
  email: string;
  username: string;
}
