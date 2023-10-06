import { ACCES_LEVEL } from '@db/constants';
import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity, Community, User } from './';

@Entity({ name: 'users_projects' })
export class UsersCommunities extends BaseEntity {
  @Column({ type: 'enum', enum: ACCES_LEVEL })
  accesLevel!: ACCES_LEVEL;

  @ManyToOne(() => User, (user) => user.communitiesIncludes)
  user!: User;

  @ManyToOne(() => Community, (community) => community.usersIncludes)
  community!: Community;
}
