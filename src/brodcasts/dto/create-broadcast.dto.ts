import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';

export enum BroadcastType {
  CONTACT = 'contact',
  TERRITORY = 'territory',
  PRODUCT = 'product',
}

export enum BroadcastStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DRAFT = 'draft',
}

export enum BroadcastChannel {
  WHATSAPP = 'whatsapp',
  WEB = 'web',
  EMAIL = 'email',
  SMS = 'sms',
}

export class CreateBroadcastDto {
  @IsNotEmpty() type: string;

  @IsOptional() categoryId: string;

  @IsOptional() contactGroupId: string;

  @IsOptional() territoryId: string;

  @IsOptional() productId: string;

  @IsOptional() message: string;

  @IsOptional() sms: string;

  @IsOptional()
  @IsIn([
    BroadcastStatus.ACTIVE,
    BroadcastStatus.DRAFT,
    BroadcastStatus.INACTIVE,
  ])
  status: string;

  @IsNotEmpty() channel: BroadcastChannel[];
}
