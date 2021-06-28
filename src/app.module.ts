import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BikeTheftsModule } from './bike-thefts/bike-thefts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoliceDepartmentsModule } from './police-departments/police-departments.module';
import { BikeTheftEventsModule } from './bike-theft-events/bike-theft-events.module';
import config from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(config), 
    UsersModule,  
    BikeTheftsModule, PoliceDepartmentsModule, BikeTheftEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
