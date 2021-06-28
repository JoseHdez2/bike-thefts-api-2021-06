import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BikeTheftEventsService } from './bike-theft-events.service';

@ApiTags('bike-theft-events')
@Controller('bike-theft-events')
export class BikeTheftEventsController {
  constructor(private readonly bikeTheftEventsService: BikeTheftEventsService) {}

  @Get()
  findAll() {
    return this.bikeTheftEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikeTheftEventsService.findOne(+id);
  }
}
