import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsEmail, MaxLength } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto {
    @ApiProperty({example: 'John'})
    @IsAlpha()
    @MaxLength(100)
    name: string;
    @ApiProperty({example: 'Smith', required: false}) 
    @IsAlpha()
    @MaxLength(200)
    surnames?: string;
    @ApiProperty({example: 'john_doe@email.com'}) 
    @IsEmail()
    email: string;
}