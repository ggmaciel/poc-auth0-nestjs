import { SequelizeModuleOptions } from '@nestjs/sequelize';
import * as dotenv from 'dotenv'

dotenv.config()

export const databaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  logging: false,
};