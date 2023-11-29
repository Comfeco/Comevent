import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AreaName } from '../../constants/interfaces.entities';
import { UserArea } from './userArea.entity';

@Entity({ name: 'areas' })
export class Area {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: AreaName })
  name!: AreaName;

  @OneToMany(() => UserArea, (userArea) => userArea.area)
  userAreas!: UserArea[];
}
