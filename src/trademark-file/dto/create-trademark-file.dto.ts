// import { Applicant } from "src/applicant/entities/applicant.entity";
// import { User } from '@prisma/client';
// import { User } from '@prisma/client';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTrademarkFileDto {
  @IsString()
  @IsNotEmpty()
  nameOfTrademark: string;

  // typeOfTrademark: string;
  // fileOfTrademark: File;
  @IsString()
  @IsNotEmpty()
  descriptionOfGoodsAndService: string;

  // classOfGoods: string;
  // reviewOfRegistration: boolean;
  // acceleratedExamination: boolean;
  // applicant: Applicant;

  // @IsNumber()
  // @IsNotEmpty()
  // user: User;
}
