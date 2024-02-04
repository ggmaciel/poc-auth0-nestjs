import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { SqlUserRepository } from './sql-user.repository';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([SqlUserRepository])],
  providers: [
    UsersService,
    {
      provide: 'USER_REPOSITORY',
      useClass: SqlUserRepository,
    },
  ],
  controllers: [UsersController],
})
export class UsersModule {}
