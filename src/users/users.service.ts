import { Injectable } from '@nestjs/common';
import { Users } from './users';
import { User } from './user';

@Injectable()
export class UsersService {
    private readonly users: Users = {
        1: {
            id: 1,
            name: 'João',
            email: 'joão@email.com'
        },
        2: {
            id: 2,
            name: 'Maria',
            email: 'maria@email.com'
        },
        3: {
            id: 3,
            name: 'Silva',
            email: 'silva@email.com'
        }
    }

    findAll(): Users {
        return this.users
    }

    create(newItem: User): void {
        const id = new Date().valueOf();

        this.users[id] = {
          ...newItem,
          id,
        };
    }

    find(id: number): User {
        const record: User = this.users[id];
    
        if (record) {
          return record;
        }
    
        throw new Error('No record found');
    }

    delete(id: number):void {
        const record: User = this.users[id];
    
        if (record) {
          delete this.users[id];
          return;
        }
    
        throw new Error('No record found to delete');
      }
}
