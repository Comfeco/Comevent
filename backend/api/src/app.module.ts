import { configModule } from '@config';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from '../../database/src/lib/database.module';
import { Modules } from './';
import { CustomExceptionFilter, TransformInterceptor } from './interceptors';
@Module({
  imports: [
    ConfigModule.forRoot(configModule),
    ...Modules,
    DatabaseModule,
    PassportModule.register({ session: true }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: CustomExceptionFilter,
    },
  ],
})
export class AppModule {}
