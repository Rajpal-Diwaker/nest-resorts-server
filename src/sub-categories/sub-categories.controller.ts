import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { sendObjectResponse, sendPaginatedListReponse } from '../shared/response.transformer';
import { SubCategoriesService } from './sub-categories.service';
import { CreateSubCategoryDto } from './dto/create-sub-category.dto';
import { UpdateSubCategoryDto } from './dto/update-sub-category.dto';

@ApiTags('Sub-category')
@Controller('sub-categories')
export class SubCategoriesController {
  constructor(private readonly subCategoriesService: SubCategoriesService) {}

  @Post()
  async create(@Body() createSubCategoryDto: CreateSubCategoryDto) {
    const response = await this.subCategoriesService.create(createSubCategoryDto);
    return sendObjectResponse(response, "Sub category created");
  }

  @Get()
  async findAll(@Query() pagination: AbstractPaginationDto) {
    const response = await this.subCategoriesService.findAll(pagination);
    return sendPaginatedListReponse(response, 'Success');
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.subCategoriesService.findOne(id);
  // }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateSubCategoryDto: UpdateSubCategoryDto) {
    const response = await this.subCategoriesService.update(id, updateSubCategoryDto);
    return sendObjectResponse(response, "sub category updated");
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return sendObjectResponse(await this.subCategoriesService.remove(id), "Sub category deleted");
  }
}
