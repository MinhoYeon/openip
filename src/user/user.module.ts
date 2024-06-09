import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

import * as config from 'config';

const jwtConfig = config.get('jwt');

@Module({
  imports: [
    PrismaModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: jwtConfig.secretOrKey,
      signOptions: { expiresIn: jwtConfig.expiresIn },
    }),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy], //user 안에서 사용하기 위해 JwtStrategy를 넣어줌
  exports: [JwtStrategy, PassportModule], //다른 모듈에서 사용할 수 있게 JwtStrategy를 넣어줌
})
export class UserModule {}
