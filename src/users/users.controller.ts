import { Body, Controller, Get, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOkResponse()
  @ApiQuery({name: 'name', required: false})
  @Get()
  getUsers(@Query('name') name?: string): User[] {
    return this.usersService.findAll(name);
  }

  @ApiOkResponse({type: User})
  @ApiNotFoundResponse()
  @Get(':id')
  getUserById(@Param('id') id: string): User {
    const user = this.usersService.findById(Number(id));

    if(!user) {
      throw new NotFoundException(`User with id ${id} not found.`);
    }

    return user;
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.create(body);
  }
}
