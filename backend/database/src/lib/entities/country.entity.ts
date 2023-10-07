import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity'; // Asumiendo que este es el path correcto

@Entity({ name: 'countries' })
export class Country {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text', unique: true })
  name!: string;

  // Si quieres almacenar más datos sobre el país, como código, moneda, etc., puedes añadir más columnas aquí.

  @OneToMany(() => User, (user) => user.country)
  users!: User[];
}
