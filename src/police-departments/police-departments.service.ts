import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { QueryFailedError, Repository } from 'typeorm';
import { CreatePoliceDepartmentDto } from './dto/create-police-department.dto';
import { UpdatePoliceDepartmentDto } from './dto/update-police-department.dto';
import { PoliceDepartment } from './entities/police-department.entity';

@Injectable()
export class PoliceDepartmentsService {
  
  constructor(
    @InjectRepository(PoliceDepartment) private policeDeptRepository: Repository<PoliceDepartment>,
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}
  
  create(createPoliceDepartmentDto: CreatePoliceDepartmentDto) {
    try {
      const newPoliceDepartment = this.policeDeptRepository.create({ id: Date.now(), ...createPoliceDepartmentDto });
      return this.policeDeptRepository.save(newPoliceDepartment);
    } catch (err) {
        if(err instanceof QueryFailedError){
            console.log(err);
        }
        throw err;
    }
  }

  findAll() {
    return `This action returns all policeDepartments`;
  }

  async findOne(id: number): Promise<PoliceDepartment> {
    try {
        return await this.policeDeptRepository.findOneOrFail(id);
    } catch (err) {
        throw err;
    }
  }

  async update(id: number, dto: UpdatePoliceDepartmentDto) {
    const policeDept = await this.findOne(id);
    const newPoliceDept = { ...policeDept, ...dto };
    return this.policeDeptRepository.save(newPoliceDept);
  }

  async remove(id: number) {
    const policeDept = await this.findOne(id);
    return this.policeDeptRepository.remove(policeDept);
  }

  async assignPoliceOfficer(id: number, userId: number) {
    const user = await this.usersRepository.findOneOrFail(userId);
    const policeDept = await this.policeDeptRepository.findOneOrFail(id);
    policeDept.policeOfficers = [...policeDept.policeOfficers, user];
    return this.policeDeptRepository.save(policeDept);
  }

  async deassignPoliceOfficer(id: number, userId: number) {
    const user = await this.usersRepository.findOneOrFail(userId);
    const policeDepartment = await this.policeDeptRepository.findOneOrFail(id);
    policeDepartment.policeOfficers = policeDepartment.policeOfficers.filter(po => po.id !== userId);
    return this.policeDeptRepository.save(policeDepartment);
  }

}
