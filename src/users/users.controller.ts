import { Get, Param, Post, Body, Delete, UseGuards } from '@nestjs/common'
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users';
import { User } from './user';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/roles/roles.decorator';
import { RolesGuard } from 'src/roles/roles.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    async findAll(): Promise<Users> {
        return this.usersService.findAll()
    }
    
    // TODO
    @Get()
    async findById(): Promise<void> {
    }

    // TODO
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('admin')
    @Post()
    async create(@Body() user: User): Promise<void> {
    }
}
