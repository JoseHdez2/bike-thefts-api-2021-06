import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BikeTheftsModule } from './bike-thefts/bike-thefts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from '../ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot({}), 
    UsersModule,  
    BikeTheftsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
