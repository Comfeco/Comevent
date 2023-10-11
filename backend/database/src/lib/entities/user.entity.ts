import { BLOCKED_TIME, ROLES } from '@db/constants';
import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { LastUpdatedBy } from '../../decorators/lastUpdateBy.decorator';
import { IUser } from '../interfaces/user.interface';
import { BaseEntity } from './base.entity';
import { Country } from './country.entity';
import { SocialNetwork } from './socialNetwork.entity';
import { Specialty } from './specialty.entity';
import { UserArea } from './userArea.entity';
import { UsersCommunities } from './usersCommunities.entity';

// extends Base
@Entity({ name: 'users' })
export class User extends BaseEntity implements IUser {
  @Column({ type: 'text', nullable: true, unique: true })
  googleId?: string;

  @Column({ type: 'text', nullable: true, unique: true })
  facebookId?: string;

  @Column({ type: 'text', nullable: true, unique: true })
  discordId?: string;

  @Column({ type: 'text', nullable: true })
  firstName!: string;

  @Column({ type: 'text', nullable: true })
  lastName!: string;

  @Column({ type: 'integer', nullable: true })
  age!: number;

  @Column({
    type: 'text',
    unique: true,
  })
  email!: string;

  @Column({ type: 'text', unique: true })
  username!: string;

  @Column({ type: 'text', nullable: true })
  avatar?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @Column({ type: 'date', nullable: true })
  bornDate?: Date;

  @Column({ type: 'text', nullable: true })
  gender?: string;

  @Exclude()
  @Column({ type: 'text', nullable: true })
  password!: string;

  @Column({ type: 'boolean', default: true })
  isActive!: boolean;

  @Column({ type: 'boolean', default: false })
  isBlocked!: boolean;

  @Column({ type: 'enum', enum: BLOCKED_TIME, nullable: true })
  timeBlocked!: BLOCKED_TIME;

  @Column({ type: 'text', default: [ROLES.USER], array: true })
  roles!: ROLES[];

  @OneToMany(
    () => UsersCommunities,
    (usersCommunities) => usersCommunities.user
  )
  communitiesIncludes!: UsersCommunities[];

  @ManyToOne(() => Country, (country) => country.users)
  country!: Country;

  @OneToMany(() => SocialNetwork, (socialNetwork) => socialNetwork.user)
  socialNetworks!: SocialNetwork[];

  @OneToMany(() => UserArea, (userArea) => userArea.user)
  userAreas!: UserArea[];

  @ManyToOne(() => Specialty, (specialty) => specialty.users)
  specialty!: Specialty;

  @LastUpdatedBy(User)
  lastUpdateBy!: User;
}
