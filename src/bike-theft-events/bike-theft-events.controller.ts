import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BikeTheftEventsService } from './bike-theft-events.service';

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
