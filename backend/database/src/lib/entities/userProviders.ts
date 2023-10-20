import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';
import { AuthProvider } from '../../constants/interfaces.entities';

@Entity({ name: 'user_providers' })
export class UserProvider {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ type: 'enum', enum: AuthProvider })
  provider?: AuthProvider;

  @Column({ type: 'text' })
  providerId?: string;

  @ManyToOne(() => User, (user) => user.providers)
  user?: User;
}
