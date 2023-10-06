import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';
import { Area } from './area.entity';

@Entity({ name: 'user_areas' })
export class UserArea {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.userAreas)
  user!: User;

  @ManyToOne(() => Area, (area) => area.userAreas)
  area!: Area;

  @Column({ type: 'enum', enum: ['EXPERTISE', 'INTEREST'] })
  type!: 'EXPERTISE' | 'INTEREST'; // Indica si es de expertise o interés
}
