import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from '.';
import { User } from './user.entity';

@Entity({ name: 'events' })
export class Event extends BaseEntity {
  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'text' })
  description!: string;

  @ManyToMany(() => User, (user) => user.events)
  users!: User[];
}
