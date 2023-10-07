import { Column, Entity, OneToMany } from 'typeorm';
import { Task, UsersCommunities } from '.';
import { IProject } from '../interfaces/project.interface';
import { BaseEntity } from './base.entity';

// extends Base
@Entity({ name: 'project' })
export class Community extends BaseEntity implements IProject {
  @Column('text')
  name!: string;

  @Column('text')
  description!: string;

  @OneToMany(
    () => UsersCommunities,
    (usersCommunities) => usersCommunities.community
  )
  usersIncludes!: UsersCommunities[];

  @OneToMany(() => Task, (tasks) => tasks.project)
  tasks!: Task[];
}
