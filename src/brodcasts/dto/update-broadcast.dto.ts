import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateBroadcastDto } from './create-broadcast.dto';

export class UpdateBroadcastDto extends CreateBroadcastDto {
  @IsNotEmpty() id: string;
}
