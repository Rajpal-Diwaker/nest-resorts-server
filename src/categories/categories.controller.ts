import { AbstractPaginationDto, CategoryFilterType } from '../shared/dto/abstract-pagination.dto';
import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { sendListReponse, sendObjectResponse, sendPaginatedListReponse } from '../shared/response.transformer';
import { CategoriesService } from './categories.service';
import { CategoryType, CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { AbstractResponse } from '../shared/abstract.response';

@ApiTags('Category')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    const response = await this.categoriesService.create(createCategoryDto);
    return sendObjectResponse(response, "Category created");
  }

  @ApiResponse({ status: 200, type: AbstractResponse })
  @Get()
  async findAll(@Query() pagination: AbstractPaginationDto, @Query() type: CategoryFilterType) {
    const response = await this.categoriesService.findAll(pagination, type);
    return sendPaginatedListReponse(response, 'Success');
  }

  @ApiResponse({ status: 200, type: AbstractResponse })
  @Get('/list/get')
  async list() {
    const response = await this.categoriesService.list();
    return sendListReponse(response, 'Success');
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.categoriesService.findOne(id);
  // }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto) {
    const response = await this.categoriesService.update(id, updateCategoryDto);
    return sendObjectResponse(response, "Category updated");
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return sendObjectResponse(await this.categoriesService.remove(id), "Category deleted");
  }
}
