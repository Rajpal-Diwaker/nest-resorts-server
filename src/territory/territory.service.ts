import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { PaginateItems } from '../shared/response.transformer';
import { generateSlug } from '../utils/functions';
import { CreateTerritoryDto } from './dto/create-territory.dto';
import { UpdateTerritoryDto } from './dto/update-territory.dto';
import { Territory } from './entities/territory.entity';

@Injectable()
export class TerritoryService {
  constructor(
    @InjectRepository(Territory)
    private readonly territoryRepo: Repository<Territory>,
  ) {}

  async create(createTerritoryDto: CreateTerritoryDto) {
    const data = await this.territoryRepo.create(createTerritoryDto);
    data.slug = generateSlug(data.name);
    await this.territoryRepo.save(data);
    return await this.findOne(data.id);
  }

  async findAll(pagination: AbstractPaginationDto) {
    // const response = await PaginateItems(this.territoryRepo, pagination);
    const query = this.territoryRepo.createQueryBuilder('territory');
    query.loadRelationCountAndMap('territory.contacts', 'territory.contacts');
    query.orderBy('territory.createdAt', 'DESC');;
    return await PaginateItems(query, pagination);
  }

  async list() {
    return await this.territoryRepo.find({ select: ['id', 'name'] });
  }

  async findOne(id: string) {
    const response = await this.territoryRepo.findOne(id);

    if (!response) {
      throw new NotFoundException('sub category Not Found');
    }

    return response;
  }

  async update(id: string, updateTerritoryDto: UpdateTerritoryDto) {
    const data = await this.findOne(id);
    updateTerritoryDto.slug = generateSlug(updateTerritoryDto.name);
    await this.territoryRepo.update(id, updateTerritoryDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    const data = await this.findOne(id);
    return await this.territoryRepo.delete(id);
  }
}
