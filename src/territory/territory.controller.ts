
import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { TerritoryService } from './territory.service';
import { CreateTerritoryDto } from './dto/create-territory.dto';
import { UpdateTerritoryDto } from './dto/update-territory.dto';
import { sendListReponse, sendObjectResponse, sendPaginatedListReponse } from '../shared/response.transformer';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Territory')
@Controller('territory')
export class TerritoryController {
  constructor(private readonly territoryService: TerritoryService) {}

  @Post()
  async create(@Body() createTerritoryDto: CreateTerritoryDto) {
    const response = await this.territoryService.create(createTerritoryDto);
    return sendObjectResponse(response, "Territory created");
  }

  @Get()
  async findAll(@Query() pagination: AbstractPaginationDto) {
    const response = await this.territoryService.findAll(pagination);
    return sendPaginatedListReponse(response, 'Success');
  }

  @Get('/list/get')
  async list() {
    const response = await this.territoryService.list();
    return sendListReponse(response, 'Success');
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.territoryService.findOne(+id);
  // }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateTerritoryDto: UpdateTerritoryDto) {
    const response = await this.territoryService.update(id, updateTerritoryDto);
    return sendObjectResponse(response, "Territory updated");
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return sendObjectResponse(await this.territoryService.remove(id), "Territory deleted");
  }
}
