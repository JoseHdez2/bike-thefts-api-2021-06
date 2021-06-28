import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BikeTheftEventsService } from './bike-theft-events.service';
import { CreateBikeTheftEventDto } from './dto/create-bike-theft-event.dto';
import { UpdateBikeTheftEventDto } from './dto/update-bike-theft-event.dto';

@Controller('bike-theft-events')
export class BikeTheftEventsController {
  constructor(private readonly bikeTheftEventsService: BikeTheftEventsService) {}

  @Post()
  create(@Body() createBikeTheftEventDto: CreateBikeTheftEventDto) {
    return this.bikeTheftEventsService.create(createBikeTheftEventDto);
  }

  @Get()
  findAll() {
    return this.bikeTheftEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikeTheftEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBikeTheftEventDto: UpdateBikeTheftEventDto) {
    return this.bikeTheftEventsService.update(+id, updateBikeTheftEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikeTheftEventsService.remove(+id);
  }
}
