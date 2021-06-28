import { Module } from '@nestjs/common';
import { BikeTheftsService } from './bike-thefts.service';
import { BikeTheftsController } from './bike-thefts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeTheft } from './entities/bike-theft.entity';
import { BikeTheftEventsModule } from 'src/bike-theft-events/bike-theft-events.module';

@Module({
  imports: [TypeOrmModule.forFeature([BikeTheft]), BikeTheftEventsModule],
  controllers: [BikeTheftsController],
  providers: [BikeTheftsService]
})
export class BikeTheftsModule {}
