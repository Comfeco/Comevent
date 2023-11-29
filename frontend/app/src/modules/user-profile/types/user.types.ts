import { Event, SocialNetwork, UserArea } from '@db/entities';

export interface IUserProfile {
  username?: string;
  avatar?: string;
  description?: string;
  userAreas?: UserArea[];
  socialNetworks?: SocialNetwork[];
  events?: Event[];
}
