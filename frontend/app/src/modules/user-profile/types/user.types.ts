import { UserArea } from '@db/entities';

export interface ISocialNetworks {
  platform: string;
}

export interface IUserProfile {
  username?: string;
  avatar?: string;
  description?: string;
  userAreas?: UserArea[];
  socialNetworks?: string[];
  events?: string[];
}
