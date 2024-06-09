import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect()
      .then(() => console.log('Conneted to DB'))
      .catch((err) => {
        console.log('Error Connecting to DB', err);
      });
  }
}
