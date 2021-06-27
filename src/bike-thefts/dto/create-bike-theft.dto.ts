import { ApiProperty } from "@nestjs/swagger";
import { IsAlpha, IsAlphanumeric, MaxLength } from "class-validator";

export class CreateBikeTheftDto {
    
    id: number;

    @ApiProperty({example: 'ABCD1234', required: false})
    @MaxLength(50)
    bikeLicenseNumber?: string;
    
    @ApiProperty({example: 'red', required: false})
    @MaxLength(50)
    bikeColor?: string;
    
    @ApiProperty({example: 'mountain bike', required: false})
    bikeType?: string;
    
    @ApiProperty({example: 'John Smith', required: false})
    @MaxLength(300)
    ownerFullName?: string;
    
    @ApiProperty({example: '2021-06-28', required: false})
    theftDate?: Date;
    
    @ApiProperty({example: 'I stopped for a coffee for 5 minutes and when I came back my bike was gone.', required: false})
    @MaxLength(1000)
    theftDescription?: string;
    
    @ApiProperty({example: 'I stopped for a coffee for 5 minutes and when I came back my bike was gone.', required: false})
    @MaxLength(500)
    theftAddress?: string;
}
