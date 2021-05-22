import { ContactGroup } from './entities/contact-group.entity';
import { AbstractService } from './../shared/services/abstract-service.service';
import { Injectable } from '@nestjs/common';
import { CreateContactGroupDto } from './dto/create-contact-group.dto';
import { UpdateContactGroupDto } from './dto/update-contact-group.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactGroupsService extends AbstractService {
  constructor(
    @InjectRepository(ContactGroup)
    private readonly contactGroupRepo: Repository<ContactGroup>,
  ) {
    super();
    this.repository = this.contactGroupRepo;
  }
}
