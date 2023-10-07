import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';

@Entity({ name: 'specialty' })
export class Specialty {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string; // Nombre de la especialidad, ej. "Desarrollo Web", "Diseño Gráfico", etc.

  @OneToMany(() => User, (user) => user.specialty)
  users!: User[];
}
