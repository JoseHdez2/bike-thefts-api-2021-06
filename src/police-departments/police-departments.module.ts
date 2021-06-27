import { Module } from '@nestjs/common';
import { PoliceDepartmentsService } from './police-departments.service';
import { PoliceDepartmentsController } from './police-departments.controller';

@Module({
  controllers: [PoliceDepartmentsController],
  providers: [PoliceDepartmentsService]
})
export class PoliceDepartmentsModule {}
