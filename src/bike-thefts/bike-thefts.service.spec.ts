import { Test, TestingModule } from '@nestjs/testing';
import { BikeTheftsService } from './bike-thefts.service';

describe('BikeTheftsService', () => {
  let service: BikeTheftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikeTheftsService],
    }).compile();

    service = module.get<BikeTheftsService>(BikeTheftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
