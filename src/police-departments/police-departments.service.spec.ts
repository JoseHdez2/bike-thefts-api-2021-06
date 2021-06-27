import { Test, TestingModule } from '@nestjs/testing';
import { PoliceDepartmentsService } from './police-departments.service';

describe('PoliceDepartmentsService', () => {
  let service: PoliceDepartmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PoliceDepartmentsService],
    }).compile();

    service = module.get<PoliceDepartmentsService>(PoliceDepartmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
