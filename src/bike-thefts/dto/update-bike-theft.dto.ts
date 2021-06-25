import { PartialType } from '@nestjs/swagger';
import { CreateBikeTheftDto } from './create-bike-theft.dto';

export class UpdateBikeTheftDto extends PartialType(CreateBikeTheftDto) {}
