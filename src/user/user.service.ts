import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  // async create(createUserDto: CreateUserDto): Promise<User | null> {
  //   return await this.prisma.user.create({
  //     data: {
  //       email: createUserDto.email,
  //       password: createUserDto.password,
  //       name: createUserDto.name,
  //     },
  //   });
  // }

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    //비빌번호 암호화하기
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(createUserDto.password, salt);

    //프리즈마를 이용해 db에 저장할 data 형식으로 만들기
    const data: Prisma.UserCreateInput = {
      email: createUserDto.email,
      password: hashPassword,
      name: createUserDto.name,
    };

    try {
      return await this.prisma.user.create({ data });
    } catch (error) {
      // console.log(error);
      if (error.code === 'P2002') {
        throw new HttpException('User already exists', HttpStatus.CONFLICT);
      }
      throw new HttpException(
        'Something went wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async login(loginUserDto: LoginUserDto): Promise<{ accessToken: string }> {
    const { email, password } = loginUserDto;
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }

    //암호화된 비밀번호와 비교
    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      //JWT token 생성 및 전달
      const payload = { email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken: accessToken };
    } else {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
  }

  async findAll(): Promise<User[] | null> {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) {
      throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const findUser = await this.findOne(id);

    const data: Prisma.UserUpdateInput = {
      password: updateUserDto.password,
      name: updateUserDto.name,
    };

    return await this.prisma.user.update({
      where: { id: findUser.id },
      data,
    });
  }

  async remove(id: number) {
    const findUser = await this.findOne(id);
    return await this.prisma.user.delete({ where: { id: findUser.id } });
  }
}
