import { Test, TestingModule } from '@nestjs/testing';
import { BikeTheftsController } from './bike-thefts.controller';
import { BikeTheftsService } from './bike-thefts.service';

describe('BikeTheftsController', () => {
  let controller: BikeTheftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BikeTheftsController],
      providers: [BikeTheftsService],
    }).compile();

    controller = module.get<BikeTheftsController>(BikeTheftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
