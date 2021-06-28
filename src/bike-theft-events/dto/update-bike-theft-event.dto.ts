import { PartialType } from '@nestjs/swagger';
import { CreateBikeTheftEventDto } from './create-bike-theft-event.dto';

export class UpdateBikeTheftEventDto extends PartialType(CreateBikeTheftEventDto) {}
