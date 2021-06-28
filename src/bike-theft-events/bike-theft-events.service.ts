import { Injectable } from '@nestjs/common';
import { CreateBikeTheftEventDto } from './dto/create-bike-theft-event.dto';
import { UpdateBikeTheftEventDto } from './dto/update-bike-theft-event.dto';

@Injectable()
export class BikeTheftEventsService {
  create(createBikeTheftEventDto: CreateBikeTheftEventDto) {
    return 'This action adds a new bikeTheftEvent';
  }

  findAll() {
    return `This action returns all bikeTheftEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bikeTheftEvent`;
  }

  update(id: number, updateBikeTheftEventDto: UpdateBikeTheftEventDto) {
    return `This action updates a #${id} bikeTheftEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} bikeTheftEvent`;
  }
}
