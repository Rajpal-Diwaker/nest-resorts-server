import { ApiHideProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
export class CreateOrganisationDto {
  @IsNotEmpty() name: string;

  @IsNotEmpty() address: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longitude: number;

  @IsNotEmpty() email: string;

  @IsNotEmpty() phone: string;

  @IsNotEmpty() @IsUUID() territoryId: string;

  @IsNotEmpty() @IsUUID() categoryId: string;

  @IsNotEmpty() @IsUUID() subCategoryId: string;
}
