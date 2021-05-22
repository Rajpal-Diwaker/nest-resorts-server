import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateSubCategoryDto {
  @IsNotEmpty() name: string;

  @IsNotEmpty() @IsUUID() categoryId: string;

  slug: string;
}
