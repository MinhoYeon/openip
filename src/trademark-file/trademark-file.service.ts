import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTrademarkFileDto } from './dto/create-trademark-file.dto';
import { UpdateTrademarkFileDto } from './dto/update-trademark-file.dto';
// import { TrademarkFile, TrademarkFileStatus } from './trademark-file.model';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, TrademarkFile, User } from '@prisma/client';

@Injectable()
export class TrademarkFileService {
  constructor(private prisma: PrismaService) {}

  async create(
    createTrademarkFileDto: CreateTrademarkFileDto,
    user: User,
  ): Promise<TrademarkFile | null> {
    // console.log('user.service', user);
    const data: Prisma.TrademarkFileCreateInput = {
      nameOfTrademark: createTrademarkFileDto.nameOfTrademark,
      descriptionOfGoodsAndService:
        createTrademarkFileDto.descriptionOfGoodsAndService,
      user: {
        connect: { id: user.id },
      },
    };
    return await this.prisma.trademarkFile.create({ data });
  }

  async findAll(user: User): Promise<TrademarkFile[] | null> {
    return await this.prisma.trademarkFile.findMany({
      where: { userId: user.id },
    });
  }

  async findOne(id: number, user: User): Promise<TrademarkFile | null> {
    const findTrademarkFile = await this.prisma.trademarkFile.findFirst({
      where: { id: id, userId: user.id },
    });
    if (!findTrademarkFile) {
      throw new HttpException('TrademarkFile Not Found', HttpStatus.NOT_FOUND);
    }
    return findTrademarkFile;
  }

  async update(
    id: number,
    updateTrademarkFileDto: UpdateTrademarkFileDto,
    user: User,
  ) {
    const findTrademarkFile = await this.findOne(id, user);
    return await this.prisma.trademarkFile.update({
      where: { id: findTrademarkFile.id },
      data: {
        nameOfTrademark: updateTrademarkFileDto.nameOfTrademark,
        descriptionOfGoodsAndService:
          updateTrademarkFileDto.descriptionOfGoodsAndService,
      },
    });
  }

  async remove(id: number, user: User): Promise<TrademarkFile | null> {
    const findTrademarkFile = await this.findOne(id, user);
    return await this.prisma.trademarkFile.delete({
      where: { id: findTrademarkFile.id, userId: user.id },
    });
  }
}
