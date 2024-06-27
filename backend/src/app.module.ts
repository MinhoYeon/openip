import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ApplicantModule } from './applicant/applicant.module';
import { TrademarkFileModule } from './trademark-file/trademark-file.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [UserModule, ApplicantModule, TrademarkFileModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
