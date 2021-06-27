import { Test, TestingModule } from '@nestjs/testing';
import { PoliceDepartmentsController } from './police-departments.controller';
import { PoliceDepartmentsService } from './police-departments.service';

describe('PoliceDepartmentsController', () => {
  let controller: PoliceDepartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PoliceDepartmentsController],
      providers: [PoliceDepartmentsService],
    }).compile();

    controller = module.get<PoliceDepartmentsController>(PoliceDepartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
