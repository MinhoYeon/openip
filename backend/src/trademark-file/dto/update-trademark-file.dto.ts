import { PartialType } from '@nestjs/mapped-types';
import { CreateTrademarkFileDto } from './create-trademark-file.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateTrademarkFileDto extends PartialType(
  CreateTrademarkFileDto,
) {
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
}
