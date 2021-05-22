import { AbstractEntity } from '../../shared/entities/abstract-entity';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';
import { Contact } from '../../contacts/entities/contact.entity';

@Entity('territory')
export class Territory extends AbstractEntity {
  @Column() name: string;

  @Column() slug: string;

  @OneToMany((type) => Contact, (contact) => contact.territory)
  @JoinColumn()
  contacts: Contact[];
}
