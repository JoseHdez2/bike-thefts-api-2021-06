import { Module } from '@nestjs/common';
import { BikeTheftsService } from './bike-thefts.service';
import { BikeTheftsController } from './bike-thefts.controller';

@Module({
  controllers: [BikeTheftsController],
  providers: [BikeTheftsService]
})
export class BikeTheftsModule {}
