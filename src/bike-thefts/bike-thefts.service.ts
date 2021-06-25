import { Injectable } from '@nestjs/common';
import { CreateBikeTheftDto } from './dto/create-bike-theft.dto';
import { UpdateBikeTheftDto } from './dto/update-bike-theft.dto';

@Injectable()
export class BikeTheftsService {
  create(createBikeTheftDto: CreateBikeTheftDto) {
    return 'This action adds a new bikeTheft';
  }

  findAll() {
    return `This action returns all bikeThefts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bikeTheft`;
  }

  update(id: number, updateBikeTheftDto: UpdateBikeTheftDto) {
    return `This action updates a #${id} bikeTheft`;
  }

  remove(id: number) {
    return `This action removes a #${id} bikeTheft`;
  }
}
