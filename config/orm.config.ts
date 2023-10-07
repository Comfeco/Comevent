import {
  Area,
  Community,
  Country,
  SocialNetwork,
  Specialty,
  Task,
  Token,
  User,
  UserArea,
  UsersCommunities,
} from '@db/entities';
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import InitSeeder from '../backend/database/seeders/init.seeders';
import {
  DB_HOST,
  DB_NAME,
  DB_PASS,
  DB_PORT,
  DB_SYNC,
  DB_USER,
} from './constants';

console.log('DB_HOST:', DB_HOST);
console.log('DB_PORT:', DB_PORT);
console.log('DB_NAME:', DB_NAME);
console.log('DB_USER:', DB_USER);
console.log('DB_PASS:', DB_PASS);
console.log('DB_SYNC:', DB_SYNC);

export const options = {
  type: 'postgres',
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  username: DB_USER,
  password: DB_PASS,
  entities: [
    User,
    Community,
    Task,
    UsersCommunities,
    Token,
    Area,
    Country,
    Specialty,
    UserArea,
    SocialNetwork,
  ], // *works on windows
  // entities: [
  // join(__dirname, '/../backend/database/src/lib/entities/**/*.entity.ts'),
  // ],
  migrationsRun: true,
  migrations: [
    join(__dirname, '/../backend/database/src/lib/migrations/**/*.ts'),
  ],
  namingStrategy: new SnakeNamingStrategy(),
  migrationsTableName: 'migration',
  seeds: [InitSeeder],
  // Activar SOLO MANUALMENTE en DESARROLLO SI ES NECESARIO (DESACTIVAR EN PRODUCCION).
  synchronize: DB_SYNC,
  //logging: false,
  //logger: 'file'
};

console.log('Options:', options);

export const dataSource = new DataSource(
  options as DataSourceOptions & SeederOptions
);
