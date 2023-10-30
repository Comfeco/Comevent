import { Token } from '@db/entities';
import { JWT_SECRET } from '@environments';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { UsersService } from '../users/users.service';
import { SessionSerializer } from '../utils/serializer';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { FacebookStrategy } from './strategies/facebook.strategy';
import { GithubStrategy } from './strategies/github.strategy';
import { GoogleStrategy } from './strategies/google.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Global()
@Module({
  imports: [
    ConfigModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: () => ({
        secret: JWT_SECRET,
        signOptions: {
          expiresIn: '4h',
        },
      }),
    }),
    UsersModule,
    TypeOrmModule.forFeature([Token]),
  ],
  providers: [
    AuthService,
    UsersService,
    JwtStrategy,
    GoogleStrategy,
    FacebookStrategy,
    GithubStrategy,
    SessionSerializer,
  ],
  controllers: [AuthController],
  exports: [
    JwtStrategy,
    PassportModule,
    JwtModule,
    GoogleStrategy,
    FacebookStrategy,
    GithubStrategy,
  ],
})
export class AuthModule {}
