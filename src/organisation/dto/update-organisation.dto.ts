import { PartialType } from '@nestjs/mapped-types';
import { ApiHideProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class UpdateOrganisationDto {
  @IsNotEmpty() name: string;

  @ApiHideProperty() slug: string;

  @IsNotEmpty() address: string;

  @IsNotEmpty() email: string;

  @IsNotEmpty() phone: string;

  @IsNotEmpty() @IsUUID() territoryId: string;

  @IsNotEmpty() @IsUUID() categoryId: string;

  @IsNotEmpty() @IsUUID() subCategoryId: string;
}
