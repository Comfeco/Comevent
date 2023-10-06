import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserArea } from './userArea.entity';

@Entity({ name: 'areas' })
export class Area {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string; // Nombre del área, ej. "Programación", "Diseño", etc.

  @OneToMany(() => UserArea, (userArea) => userArea.area)
  userAreas!: UserArea[];
}
