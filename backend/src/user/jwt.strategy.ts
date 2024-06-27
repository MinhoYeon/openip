import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import * as config from 'config';
import { UserService } from './user.service';

const jwtConfig = config.get('jwt');

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private prisma: PrismaService,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.secretOrKey,
    });
  }

  async validate(payload: any) {
    const { email, jti } = payload;

    // 토큰이 블랙리스트에 있는지 확인
    const isBlacklisted = await this.userService.isTokenBlacklisted(jti);
    if (isBlacklisted) {
      throw new UnauthorizedException('Token is blacklisted');
    }

    const user: User = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
