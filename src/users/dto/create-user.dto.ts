import { ApiProperty } from "@nestjs/swagger";
import { User } from "../entities/user.entity";

export class CreateUserDto {
    @ApiProperty({example: 'John'})
    name: string;
    @ApiProperty({required: false}) 
    surnames?: string;
    @ApiProperty({example: 'john_doe@email.com'}) 
    email: string;
}