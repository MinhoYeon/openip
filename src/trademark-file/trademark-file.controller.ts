import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { TrademarkFileService } from './trademark-file.service';
import { CreateTrademarkFileDto } from './dto/create-trademark-file.dto';
import { UpdateTrademarkFileDto } from './dto/update-trademark-file.dto';
import { TrademarkFile, User } from '@prisma/client';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/user/get-user.decorator';

@Controller('tm-file')
@UseGuards(AuthGuard())
export class TrademarkFileController {
  private logger = new Logger('TrademarkFileController');
  constructor(private readonly trademarkFileService: TrademarkFileService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(
    @Body() createTrademarkFileDto: CreateTrademarkFileDto,
    @GetUser() user: User,
  ): Promise<TrademarkFile | null> {
    this.logger.verbose(
      `User ${user.name} creating a new tmFile. Payload: ${JSON.stringify(createTrademarkFileDto)}`,
    );
    return this.trademarkFileService.create(createTrademarkFileDto, user);
  }

  @Get()
  findAll(@GetUser() user: User): Promise<TrademarkFile[] | null> {
    this.logger.verbose(`User ${user.name} finding all tmFile.}`);
    return this.trademarkFileService.findAll(user);
  }

  @Get(':id')
  findOne(
    @Param('id', ParseIntPipe) id: number,
    @GetUser() user: User,
  ): Promise<TrademarkFile | null> {
    return this.trademarkFileService.findOne(id, user);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTrademarkFileDto: UpdateTrademarkFileDto,
    @GetUser() user: User,
  ) {
    return this.trademarkFileService.update(id, updateTrademarkFileDto, user);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number, @GetUser() user: User) {
    return this.trademarkFileService.remove(id, user);
  }
}
