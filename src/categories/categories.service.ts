import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractPaginationDto, CategoryFilterType } from '../shared/dto/abstract-pagination.dto';
import { PaginateItems } from '../shared/response.transformer';
import { generateSlug } from '../utils/functions';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepo: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    const data = await this.categoryRepo.create(
      createCategoryDto,
    );
    data.slug = generateSlug(data.name);
    await this.categoryRepo.save(data);
    return await this.findOne(data.id);
  }

  async findAll(pagination: AbstractPaginationDto, type: CategoryFilterType) {
    return await PaginateItems(this.categoryRepo, pagination, {
      where: {
        type: type.type,
      }
    });
  }

  async list() {
    return await this.categoryRepo.find({ select: ['id', 'name'] });
  }

  async findOne(id: string) {
    const response = await this.categoryRepo.findOne(id);

    if (!response) {
      throw new NotFoundException('sub category Not Found');
    }

    return response;
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    const data =  await this.findOne(id);
    updateCategoryDto.slug = generateSlug(updateCategoryDto.name);
    await this.categoryRepo.update(id, updateCategoryDto);
    return await this.findOne(id);
  }

  async remove(id: string) {
    const data = await this.findOne(id);
    return await this.categoryRepo.delete(id);
  }
}
