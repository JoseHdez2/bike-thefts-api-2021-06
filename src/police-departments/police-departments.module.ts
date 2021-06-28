import { Module } from '@nestjs/common';
import { PoliceDepartmentsService } from './police-departments.service';
import { PoliceDepartmentsController } from './police-departments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { PoliceDepartment } from './entities/police-department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PoliceDepartment, User])],
  controllers: [PoliceDepartmentsController],
  providers: [PoliceDepartmentsService]
})
export class PoliceDepartmentsModule {}
