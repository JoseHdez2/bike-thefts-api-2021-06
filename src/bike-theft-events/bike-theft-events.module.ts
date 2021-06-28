import { Module } from '@nestjs/common';
import { BikeTheftEventsService } from './bike-theft-events.service';
import { BikeTheftEventsController } from './bike-theft-events.controller';

@Module({
  controllers: [BikeTheftEventsController],
  providers: [BikeTheftEventsService]
})
export class BikeTheftEventsModule {}
