import { Get, Post, Body, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users';
import { User, UserRequest } from './user';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';
import { GetUser } from './users.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<Users> {
    return await this.usersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('id')
  async findById(@GetUser() user: UserRequest): Promise<User> {
    return await this.usersService.findById(user.user_metadata.id);
  }

  @UseGuards(AuthGuard('jwt'), RolesGuard)
  @Roles('admin')
  @Post()
  async create(@Body() user: User): Promise<void> {
    await this.usersService.create(user);
  }
}
