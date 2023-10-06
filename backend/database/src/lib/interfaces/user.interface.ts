import { User, UsersCommunities } from '../entities';
import { Country } from '../entities/country.entity';
import { SocialNetwork } from '../entities/socialNetwork.entity';
import { Specialty } from '../entities/specialty.entity';

export interface IUser {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  username: string;
  avatar?: string;
  description?: string;
  areasOfExpertise?: string;
  areasOfInterest?: string;
  specialty?: Specialty;
  socialNetworks?: SocialNetwork[];
  bornDate?: Date;
  gender?: string;
  password: string;
  isActive: boolean;
  isBlocked: boolean;
  timeBlocked: number;
  roles: string[];
  country: Country;
  communitiesIncludes: UsersCommunities[];
  lastUpdateBy: User;
}
