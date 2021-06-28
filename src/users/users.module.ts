import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BikeTheftEventsModule } from 'src/bike-theft-events/bike-theft-events.module';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), BikeTheftEventsModule],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
