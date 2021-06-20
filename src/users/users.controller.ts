import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) {}

    @Get()
    getUsers(): any {
        return this.usersService.getUsers();
    }

    @Get(':id')
    getUserById(@Param('id') id: string): any {
        return [{id}];
    }
}
