import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '.';
import { SocialPlatform } from '../../constants/interfaces.entities';

@Entity({ name: 'social_networks' })
export class SocialNetwork {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'enum', enum: SocialPlatform })
  platform!: SocialPlatform;

  @Column({ type: 'text' })
  link!: string;

  @ManyToOne(() => User, (user) => user.socialNetworks)
  user!: User;
}
