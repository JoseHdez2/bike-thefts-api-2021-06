import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBikeTheftEventDto } from './dto/create-bike-theft-event.dto';
import { UpdateBikeTheftEventDto } from './dto/update-bike-theft-event.dto';
import { BikeTheftEvent } from './entities/bike-theft-event.entity';

@Injectable()
export class BikeTheftEventsService {
  constructor(
    @InjectRepository(BikeTheftEvent) private bikeTheftEventsRepository: Repository<BikeTheftEvent>
) {}

  create(event: BikeTheftEvent) {
    const newEvent = this.bikeTheftEventsRepository.create(event);
    return this.bikeTheftEventsRepository.save(newEvent);
  }

  findAll() {
    return this.bikeTheftEventsRepository.find();
  }

  findOne(id: number) {
    return this.bikeTheftEventsRepository.findOne(id);
  }
}
