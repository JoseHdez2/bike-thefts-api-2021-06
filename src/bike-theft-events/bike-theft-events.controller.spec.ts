import { Test, TestingModule } from '@nestjs/testing';
import { BikeTheftEventsController } from './bike-theft-events.controller';
import { BikeTheftEventsService } from './bike-theft-events.service';

describe('BikeTheftEventsController', () => {
  let controller: BikeTheftEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikeTheftEventsController],
      providers: [BikeTheftEventsService],
    }).compile();

    controller = module.get<BikeTheftEventsController>(BikeTheftEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
