import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common'; // 여기
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  const port = config.get('server').port;
  await app.listen(port);

  logger.log(`App running on port ${port}`);
}
bootstrap();
