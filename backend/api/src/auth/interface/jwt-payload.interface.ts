import { IClaimType } from '../../interface/claimTypes';

export interface IJwtPayload {
  id: string;
  iat?: number;
  exp?: number;
  claims?: IClaimType[];
}
