import {
  Area,
  User,
  UserArea,
  UserProvider,
  UsersCommunities,
} from '@db/entities';
import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      UsersCommunities,
      Area,
      UserArea,
      UserProvider,
    ]),
  ],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService, TypeOrmModule],
})
export class UsersModule {}
