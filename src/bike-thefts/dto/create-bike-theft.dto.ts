import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsAlphanumeric, MaxLength } from "class-validator";

export class CreateBikeTheftDto {
    
    id: number;
    @MaxLength(50)
    bikeLicenseNumber?: string;
    @IsAlpha()
    @MaxLength(50)
    bikeColor?: string;
    @IsAlphanumeric()
    bikeType?: string;
    @ApiProperty({example: 'John Smith'})
    @IsAlpha()
    @MaxLength(300)
    ownerFullName?: string;
    @ApiProperty({example: '2021-06-28'})
    theftDate?: Date;
    @MaxLength(1000)
    theftDescription?: string;
    @IsAlphanumeric()
    @MaxLength(500)
    theftAddress?: string;
}
