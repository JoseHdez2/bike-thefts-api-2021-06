import { Test, TestingModule } from '@nestjs/testing';
import { BikeTheftEventsService } from './bike-theft-events.service';

describe('BikeTheftEventsService', () => {
  let service: BikeTheftEventsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BikeTheftEventsService],
    }).compile();

    service = module.get<BikeTheftEventsService>(BikeTheftEventsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
