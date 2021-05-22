import { BasicEntity } from './../../shared/entities/basic-entity';
import { Entity, JoinColumn, OneToMany } from 'typeorm';
import { Contact } from '../../contacts/entities/contact.entity';

@Entity('contact-groups')
export class ContactGroup extends BasicEntity {
  @OneToMany(() => Contact, (contact) => contact.category)
  @JoinColumn()
  contacts: Contact[];
}
