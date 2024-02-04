import { Injectable } from '@nestjs/common';
import { UserRepository } from './user-repository.interface';
import { User } from './user';
import { Sequelize  } from 'sequelize-typescript';
import { QueryTypes } from 'sequelize';

@Injectable()
export class SqlUserRepository implements UserRepository {
  constructor(private readonly sequelize: Sequelize) {}

  async findAll(): Promise<User[]> {
		const users = await this.sequelize.query<User>('SELECT * FROM users', { type: QueryTypes.SELECT })
		return users
  }
}
