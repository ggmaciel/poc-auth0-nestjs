import { Inject, Injectable } from '@nestjs/common';
import { User } from './user';
import { UserRepository } from './user-repository.interface';

@Injectable()
export class UsersService {
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: UserRepository) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    return users
  }

  async create(user: User) {
    await this.userRepository.create(user)
  }
}
