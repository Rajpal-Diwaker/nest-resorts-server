import { IsEnum, IsIn, IsNotEmpty } from 'class-validator';

export enum CategoryType {
  CONTACT = 'contact',
  ORGANIZATION = 'organisation',
  PRODUCT = 'product',
}

export class CreateCategoryDto {
  @IsNotEmpty() name: string;

  @IsIn([CategoryType.CONTACT, CategoryType.ORGANIZATION, CategoryType.PRODUCT])
  type: CategoryType;
}
