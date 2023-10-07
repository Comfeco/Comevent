import { STATUS_TASK } from '@db/constants';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Community } from '.';
import { BaseEntity } from './base.entity';

// extends Base
@Entity({ name: 'task' })
export class Task extends BaseEntity {
  @Column()
  taskName!: string;

  @Column()
  taskDescription!: string;

  @Column({ type: 'enum', enum: STATUS_TASK })
  status!: STATUS_TASK;

  @Column()
  responsableName!: string;

  @ManyToOne(() => Community, (community) => community.tasks)
  @JoinColumn({
    name: 'project-id',
  })
  project!: Community;
}
