import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PoliceDepartmentsService } from './police-departments.service';
import { CreatePoliceDepartmentDto } from './dto/create-police-department.dto';
import { UpdatePoliceDepartmentDto } from './dto/update-police-department.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('police-departments')
@Controller('police-departments')
export class PoliceDepartmentsController {
  constructor(private readonly policeDepartmentsService: PoliceDepartmentsService) {}

  @Post()
  create(@Body() createPoliceDepartmentDto: CreatePoliceDepartmentDto) {
    return this.policeDepartmentsService.create(createPoliceDepartmentDto);
  }

  @Get()
  findAll() {
    return this.policeDepartmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.policeDepartmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePoliceDepartmentDto: UpdatePoliceDepartmentDto) {
    return this.policeDepartmentsService.update(+id, updatePoliceDepartmentDto);
  }

  @Post(':id/assign/:uid')
  assignUser(@Param('id') id: string, @Param('uid') userId: string) {
    return this.policeDepartmentsService.assignPoliceOfficer(+id, +userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.policeDepartmentsService.remove(+id);
  }
}
