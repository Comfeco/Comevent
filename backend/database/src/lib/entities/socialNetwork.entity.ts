import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';

@Entity({ name: 'social_networks' })
export class SocialNetwork {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  platform!: string; // Ejemplo: 'Facebook', 'Twitter', etc.

  @Column({ type: 'text' })
  link!: string; // URL o identificador del perfil en la red social

  @ManyToOne(() => User, (user) => user.socialNetworks)
  user!: User;
}
