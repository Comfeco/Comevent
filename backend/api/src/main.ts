import { JWT_SECRET, MAX_AGE, PORT, SECURE } from '@environments';
import {
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import session from 'express-session';
import morgan from 'morgan';
import * as passport from 'passport';
import { AppModule } from './app.module';
import { initSwagger } from './app.swagger';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  const reflector = app.get(Reflector);

  app.use(cookieParser());
  app.use(
    session({
      secret: JWT_SECRET,
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: MAX_AGE,
        secure: SECURE,
      },
    })
  );

  app.use(morgan('dev'));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // *? You must comment when you are working with GraphQL, if you work with a REST API you should leave it true.
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    })
  );
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector));
  app.enableCors(CORS);
  app.setGlobalPrefix(globalPrefix);
  initSwagger(app);

  app.use(passport.initialize());
  app.use(passport.session());
  await app.listen(PORT);
  Logger.log(
    `🚀 Application is running on: http://localhost:${PORT}/${globalPrefix}`
  );
}

bootstrap();
