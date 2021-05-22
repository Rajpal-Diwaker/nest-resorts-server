import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { PaginateItems } from '../shared/response.transformer';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepo: Repository<Contact>,
  ) {}

  async create(createContactDto: CreateContactDto) {
    const data = await this.contactRepo.create(createContactDto);
    await this.contactRepo.save(data);
    return await this.findOne(data.id);
  }

  async findAll(pagination: AbstractPaginationDto) {
    return await PaginateItems(this.contactRepo, pagination);
  }

  async list() {
    return await this.contactRepo.find({ select: ['id', 'fullName'] });
  }

  async findOne(id: string) {
    const response = await this.contactRepo.findOne(id);

    if (!response) {
      throw new NotFoundException('sub category Not Found');
    }

    return response;
  }

  async update(id: string, updateContactDto: UpdateContactDto) {
    const data = await this.findOne(id);
    await this.contactRepo.update(id, updateContactDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    const data = await this.findOne(id);
    return await this.contactRepo.delete(id);
  }
}
