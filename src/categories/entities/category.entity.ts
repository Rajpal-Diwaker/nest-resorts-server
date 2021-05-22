import { Column, JoinColumn, OneToMany, Entity } from 'typeorm';
import { SubCategory } from '../../sub-categories/entities/sub-category.entity';
import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { CategoryType } from '../dto/create-category.dto';

@Entity('categories')
export class Category extends AbstractEntity {
  @Column() name: string;

  @Column() slug: string;

  @Column({
    type: 'enum',
    enum: [
      CategoryType.CONTACT,
      CategoryType.ORGANIZATION,
      CategoryType.PRODUCT,
    ],
  })
  type: string;

  // @Column()
  // type: string;

  @OneToMany(() => SubCategory, (category) => category.category, {
    eager: true,
  })
  @JoinColumn()
  subCategories: SubCategory[];
}
