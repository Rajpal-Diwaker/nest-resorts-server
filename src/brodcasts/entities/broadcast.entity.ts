import {
  BroadcastStatus,
  BroadcastChannel,
} from './../dto/create-broadcast.dto';
import { Product } from '../../products/entities/product.entity';
import { BroadcastType } from '../dto/create-broadcast.dto';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { Category } from '../../categories/entities/category.entity';
import { ContactGroup } from '../../contact-groups/entities/contact-group.entity';
import { Territory } from '../../territory/entities/territory.entity';

@Entity('brodcasts')
export class Broadcast extends AbstractEntity {
  @Column({
    type: 'enum',
    enum: [
      BroadcastType.CONTACT,
      BroadcastType.TERRITORY,
      BroadcastType.PRODUCT,
    ],
  })
  type: string;

  @Column({ nullable: true }) categoryId: string;

  @Column({ nullable: true }) contactGroupId: string;

  @Column({ nullable: true }) territoryId: string;

  @Column({ nullable: true }) productId: string;

  @Column({ type: 'text', nullable: true }) message: string;

  @Column({ type: 'text', nullable: true }) sms: string;

  @Column({
    type: 'enum',
    enum: [
      BroadcastStatus.ACTIVE,
      BroadcastStatus.DRAFT,
      BroadcastStatus.INACTIVE,
    ],
  })
  status: string;

  @Column({ type: 'simple-array' })
  channel: BroadcastChannel[];

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn()
  category: Category;

  @ManyToOne(() => ContactGroup, { eager: true })
  @JoinColumn()
  contactGroup: ContactGroup;

  @ManyToOne(() => Territory, { eager: true })
  @JoinColumn()
  territory: Territory;

  @ManyToOne(() => Product, { eager: true })
  @JoinColumn()
  product: Product;
}
