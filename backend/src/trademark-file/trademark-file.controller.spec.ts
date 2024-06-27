import { Test, TestingModule } from '@nestjs/testing';
import { TrademarkFileController } from './trademark-file.controller';
import { TrademarkFileService } from './trademark-file.service';

describe('TrademarkFileController', () => {
  let controller: TrademarkFileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrademarkFileController],
      providers: [TrademarkFileService],
    }).compile();

    controller = module.get<TrademarkFileController>(TrademarkFileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
