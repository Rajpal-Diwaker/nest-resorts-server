import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { PaginateItems } from '../shared/response.transformer';
import { generateSlug } from '../utils/functions';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';
import { SubCategory } from './entities/sub-category.entity';

@Injectable()
export class SubCategoriesService {
  constructor(@InjectRepository(SubCategory) private readonly subCategoryRepo: Repository<SubCategory>) {}

  async create(createContactSubCategoryDto: CreateSubCategoryDto) {
    const data = await this.subCategoryRepo.create(createContactSubCategoryDto);
    data.slug = generateSlug(data.name);
    await this.subCategoryRepo.save(data);
    return await this.findOne(data.id);
  }

  async findAll(pagination: AbstractPaginationDto) {
    return await PaginateItems(this.subCategoryRepo, pagination);
  }

  async list() {
    return await this.subCategoryRepo.find({ select: ['id', 'name'] });
  }

  async findOne(id: string) {
    const response = await this.subCategoryRepo.findOne(id);

    if (!response) {
      throw new NotFoundException('sub category Not Found');
    }

    return response;
  }

  async update(id: string, updateSubCategoryDto: UpdateSubCategoryDto) {
    const data =  await this.findOne(id);
    updateSubCategoryDto.slug = generateSlug(updateSubCategoryDto.name);
    await this.subCategoryRepo.update(id, updateSubCategoryDto);
    return await this.findOne(id);
  }

  remove(id: string) {
    return `This action removes a #${id} contactSubCategory`;
  }
}
