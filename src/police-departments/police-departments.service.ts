import { Injectable } from '@nestjs/common';
import { CreatePoliceDepartmentDto } from './dto/create-police-department.dto';
import { UpdatePoliceDepartmentDto } from './dto/update-police-department.dto';

@Injectable()
export class PoliceDepartmentsService {
  create(createPoliceDepartmentDto: CreatePoliceDepartmentDto) {
    return 'This action adds a new policeDepartment';
  }

  findAll() {
    return `This action returns all policeDepartments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} policeDepartment`;
  }

  update(id: number, updatePoliceDepartmentDto: UpdatePoliceDepartmentDto) {
    return `This action updates a #${id} policeDepartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} policeDepartment`;
  }
}
