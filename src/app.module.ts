import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { databaseConfig } from './database/database.config';
@Module({
  imports: [SequelizeModule.forRoot(databaseConfig), UsersModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
