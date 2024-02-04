import { User } from './user'

export interface UserRepository {
    findAll(): Promise<User[]> 
    create(user: User)
}