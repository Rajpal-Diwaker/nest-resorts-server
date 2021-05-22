import { IsEnum, IsNotEmpty } from 'class-validator';
import { BasicCreateDto } from '../../shared/dto/basic-create.dto';
import { ProductStatus } from '../enum/product.enum';

export class CreateProductDto extends BasicCreateDto {
  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  sku: number;

  @IsNotEmpty()
  categoryId: string;

  @IsNotEmpty()
  @IsEnum(ProductStatus)
  status: ProductStatus;
}
