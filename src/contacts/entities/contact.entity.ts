import { ContactGroup } from './../../contact-groups/entities/contact-group.entity';
import { Territory } from './../../territory/entities/territory.entity';
import { Organisation } from './../../organisation/entities/organisation.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';
import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { PreferredCommunication } from '../dto/create-contact.dto';

@Entity('contacts')
export class Contact extends AbstractEntity {
  @Column() fullName: string;

  @Column() outlet: string;

  @Column() email: string;

  @Column() phone: string;

  @Column() categoryId: string;

  @Column() organisationId: string;

  @Column() territoryId: string;

  @Column() contactGroupId: string;

  @ManyToOne(() => ContactGroup, { eager: true })
  @JoinColumn()
  contactGroup: ContactGroup;

  @ManyToOne(() => Territory, { eager: true })
  @JoinColumn()
  territory: Territory;

  @ManyToOne(() => Organisation, { eager: true })
  @JoinColumn()
  organisation: Organisation;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn()
  category: Category;

  @Column({ type: 'simple-array' })
  preferredCommunication: PreferredCommunication[];
}
