import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { AbstractEntity } from '../../shared/entities/abstract-entity';

@Entity('sub_categories')
export class SubCategory extends AbstractEntity {
  @Column() name: string;

  @Column() slug: string;

  @Column() categoryId: string;

  @ManyToOne(() => Category)
  @JoinColumn()
  category: Category;
}
