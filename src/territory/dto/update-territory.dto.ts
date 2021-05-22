import { ApiHideProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateTerritoryDto {
  @IsNotEmpty() name: string;
  @ApiHideProperty()
  slug: string;
}
