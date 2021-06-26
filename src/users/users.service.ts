import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private usersRepository: Repository<User>
    ) {}

    private users: User[] = [{id: 0, name: 'John', email: 'john_doe@example.com'}, {id: 1, name: 'Jane', email: 'jane_doe@example.com'}];

    findAll(name?: string): Promise<User[]> {
        if (name) {
             // return this.users.filter(u => u.name === name);
            return this.usersRepository.find();
        }
        return this.usersRepository.find();
    }
    
    async findById(id: number): Promise<User> {
        try {
            const user = await this.usersRepository.findOneOrFail(id);
            return user;
        } catch (err) {
            throw err;
        }
    }

    create(user: CreateUserDto): Promise<User> {
        const newUser = this.usersRepository.create({ id: Date.now(), ...user });
        return this.usersRepository.save(newUser);
    }

    async update(id: number, dto: CreateUserDto): Promise<User> {
        const user = await this.findById(id);
        const newUser = { ...user, ...dto };
        return this.usersRepository.save(newUser);
    }

    async delete(id: number): Promise<User> {
        const user = await this.findById(id);
        return this.usersRepository.remove(user);
    }

}
