import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { SubCategory } from '../../sub-categories/entities/sub-category.entity';
import { Territory } from '../../territory/entities/territory.entity';

@Entity('organisations')
export class Organisation extends AbstractEntity {
	@Column() name: string;
	
	@Column() slug: string;

  @Column() address: string;

  @Column({type: 'decimal'}) latitude: number;

  @Column({type: 'decimal'}) longitude: number;

  @Column() email: string;

  @Column() phone: string;

  @Column() territoryId: string;

	@Column() categoryId: string;
	
	@Column() subCategoryId: string;

  @ManyToOne(() => Territory, { eager: true })
  @JoinColumn()
	territory: Territory;
	
	@ManyToOne(() => Category, { eager: true })
  @JoinColumn()
	category: Category;
	
	@ManyToOne(() => SubCategory, { eager: true })
  @JoinColumn()
  subCategory: SubCategory;
}
