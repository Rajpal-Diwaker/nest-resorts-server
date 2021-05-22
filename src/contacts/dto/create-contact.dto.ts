import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
export class CreateContactDto {
  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty() outlet: string;

  @IsNotEmpty() email: string;

  @IsNotEmpty() phone: string;

  @IsNotEmpty() categoryId: string;

  @IsNotEmpty() organisationId: string;

  @IsNotEmpty() territoryId: string;

  @IsNotEmpty() contactGroupId: string;

  @IsNotEmpty()
  preferredCommunication: PreferredCommunication[];
}

export enum PreferredCommunication {
  WHATSAPP = 'WhatsApp',
  SMS = 'SMS',
  EMAIL = 'Email',
}
