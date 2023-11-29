export interface IClaimType {
  name: string;
  value: string;
}

export interface IJwtPayload {
  id: string;
  iat?: number;
  exp?: number;
  claims?: IClaimType[];
}
