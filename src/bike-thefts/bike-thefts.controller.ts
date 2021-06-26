import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BikeTheftsService } from './bike-thefts.service';
import { CreateBikeTheftDto } from './dto/create-bike-theft.dto';
import { UpdateBikeTheftDto } from './dto/update-bike-theft.dto';

@ApiTags('bike-thefts')
@Controller('bike-thefts')
export class BikeTheftsController {
  constructor(private readonly bikeTheftsService: BikeTheftsService) {}

  // TODO @Api({description: 'Endpoint that will receive new reports of bike thefts from users.'})
  @Post()
  create(@Body() createBikeTheftDto: CreateBikeTheftDto) {
    return this.bikeTheftsService.create(createBikeTheftDto);
  }

  @Get()
  findAll() {
    return this.bikeTheftsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikeTheftsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBikeTheftDto: UpdateBikeTheftDto) {
    return this.bikeTheftsService.update(+id, updateBikeTheftDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikeTheftsService.remove(+id);
  }
}
