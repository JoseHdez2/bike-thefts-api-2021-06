import { Module } from '@nestjs/common';
import { BikeTheftEventsService } from './bike-theft-events.service';
import { BikeTheftEventsController } from './bike-theft-events.controller';
import { BikeTheftEvent } from './entities/bike-theft-event.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BikeTheftEvent])],
  controllers: [BikeTheftEventsController],
  providers: [BikeTheftEventsService],
  exports: [BikeTheftEventsService]
})
export class BikeTheftEventsModule {}
