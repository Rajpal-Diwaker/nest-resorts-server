import { ApiHideProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateCategoryDto {
  @IsNotEmpty() name: string;

  @ApiHideProperty()
  slug: string;
}
