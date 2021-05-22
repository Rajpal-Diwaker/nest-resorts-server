import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { PaginateItems } from '../shared/response.transformer';
import { generateSlug } from '../utils/functions';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';
import { Organisation } from './entities/organisation.entity';

@Injectable()
export class OrganisationService {
  constructor(
    @InjectRepository(Organisation)
    private readonly organisationRepo: Repository<Organisation>,
  ) {}
  async create(createOrganisationDto: CreateOrganisationDto) {
    const data = await this.organisationRepo.create(createOrganisationDto);
    data.slug = generateSlug(data.name);
    await this.organisationRepo.save(data);
    return await this.findOne(data.id);
  }

  async findAll(pagination: AbstractPaginationDto) {
    return await PaginateItems(this.organisationRepo, pagination);
  }

  async list() {
    return await this.organisationRepo.find({ select: ['id', 'name'] });
  }

  async findOne(id: string) {
    const response = await this.organisationRepo.findOne(id);

    if (!response) {
      throw new NotFoundException('sub category Not Found');
    }

    return response;
  }

  async update(id: string, updateOrganisationDto: UpdateOrganisationDto) {
    const data = await this.findOne(id);
    updateOrganisationDto.slug = generateSlug(updateOrganisationDto.name);
    await this.organisationRepo.update(id, updateOrganisationDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    const data = await this.findOne(id);
    return await this.organisationRepo.delete(id);
  }
}
