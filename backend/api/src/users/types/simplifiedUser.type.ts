import { Event } from '@db/entities';

export interface ISimplifiedUser {
  username: string;
  avatar: string;
  description: string;
  socialNetworks: string[];
  userAreas: string[];
  events: Event[];
}
