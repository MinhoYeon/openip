import { Module } from '@nestjs/common';
import { TrademarkFileService } from './trademark-file.service';
import { TrademarkFileController } from './trademark-file.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [TrademarkFileController],
  providers: [TrademarkFileService],
})
export class TrademarkFileModule {}
