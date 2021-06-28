import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BikeTheftEventsService } from 'src/bike-theft-events/bike-theft-events.service';
import { QueryFailedError, Repository } from 'typeorm';
import { CreateBikeTheftDto } from './dto/create-bike-theft.dto';
import { UpdateBikeTheftDto } from './dto/update-bike-theft.dto';
import { BikeTheft, BikeTheftStatus } from './entities/bike-theft.entity';

@Injectable()
export class BikeTheftsService {

  constructor(
    @InjectRepository(BikeTheft) private bikeTheftsRepository: Repository<BikeTheft>,
    private bikeTheftEventService: BikeTheftEventsService
  ) {}

  async create(createBikeTheftDto: CreateBikeTheftDto) {
    try {
      const bikeTheft = this.bikeTheftsRepository.create({ ...createBikeTheftDto, caseStatus: BikeTheftStatus.REPORTED});
      const savedBikeTheft = await this.bikeTheftsRepository.save(bikeTheft);
      console.log(savedBikeTheft);
      this.createEvent(savedBikeTheft);
      return savedBikeTheft;
    } catch (err) {
        if(err instanceof QueryFailedError){
            console.log(err);
        }
        throw err;
    }
  }

  findAll() {
    return this.bikeTheftsRepository.find();
  }

  findOne(id: number) {
    return this.bikeTheftsRepository.findOneOrFail(id);
  }

  async update(id: number, updateBikeTheftDto: UpdateBikeTheftDto) {
    const bikeTheft = await this.findOne(id);
    const newBikeTheft = { ...bikeTheft, ...updateBikeTheftDto };
    this.createEvent(newBikeTheft);
    return this.bikeTheftsRepository.save(newBikeTheft);
  }

  async remove(id: number) {
    const bikeTheft = await this.findOne(id);
    this.createEvent({...bikeTheft, caseStatus: BikeTheftStatus.DELETED});
    return this.bikeTheftsRepository.remove(bikeTheft);
  }

  private createEvent(bikeTheft: BikeTheft) {
    this.bikeTheftEventService.create({bikeTheftId: bikeTheft?.id, userId: bikeTheft.assignedPoliceOfficer.id, caseStatus: bikeTheft.caseStatus});
  }
}
