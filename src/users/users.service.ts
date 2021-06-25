import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    private users: User[] = [{id: 0, name: 'John', email: 'john_doe@example.com'}, {id: 1, name: 'Jane', email: 'jane_doe@example.com'}];

    findAll(name?: string): User[] { 
        if (name) {
            return this.users.filter(u => u.name === name);
        }
        return this.users; 
    }

    findById(id: number): User {
        return this.users.find(u => u.id == id);
    }

    create(user: CreateUserDto): User {
        const newUser = { id: Date.now(), ...user };
        this.users.push(newUser);
        return newUser;
    }

}
