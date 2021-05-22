import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { BasicEntity } from '../../shared/entities/basic-entity';
import { ProductStatus } from '../enum/product.enum';

@Entity('products')
export class Product extends BasicEntity {
  @ManyToOne(() => Category, { eager: true })
  @JoinColumn()
  category: Category;

  @Column()
  categoryId: string;

  @Column({ unique: true })
  sku: string;

  @Column()
  price: number;

  @Column({ enum: ProductStatus })
  status: ProductStatus;
}
