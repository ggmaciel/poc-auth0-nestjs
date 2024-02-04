import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepository } from './user-repository.interface';
import { User } from './user';
import { Sequelize } from 'sequelize-typescript';
import { QueryTypes, ValidationErrorItem } from 'sequelize';

@Injectable()
export class SqlUserRepository implements UserRepository {
  constructor(private readonly sequelize: Sequelize) {}

  async findAll(): Promise<User[]> {
    return await this.sequelize.query<User>('SELECT * FROM users', {
      type: QueryTypes.SELECT,
    });
  }

  async create(user: User) {
    const query = 'INSERT INTO users (name, email) VALUES (:name, :email)';

    try {
      await this.sequelize.query(query, {
        replacements: { name: user.name, email: user.email },
        type: QueryTypes.INSERT,
      });
    } catch (err) {
      if (err.errors[0] instanceof ValidationErrorItem) {
        const validationError = err.errors[0];

        console.error(validationError);

        throw new BadRequestException(validationError.message);
      }

      console.error(err);
      throw Error('Something went wrong...');
    }
  }
}
