import { Test, TestingModule } from '@nestjs/testing';
import { TrademarkFileService } from './trademark-file.service';

describe('TrademarkFileService', () => {
  let service: TrademarkFileService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrademarkFileService],
    }).compile();

    service = module.get<TrademarkFileService>(TrademarkFileService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
