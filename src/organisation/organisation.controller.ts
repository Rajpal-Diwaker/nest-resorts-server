import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { CreateOrganisationDto } from './dto/create-organisation.dto';
import { UpdateOrganisationDto } from './dto/update-organisation.dto';
import { ApiTags } from '@nestjs/swagger';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { sendListReponse, sendObjectResponse, sendPaginatedListReponse } from '../shared/response.transformer';

@ApiTags('Organisation')
@Controller('organisation')
export class OrganisationController {
  constructor(private readonly organisationService: OrganisationService) {}

  @Post()
  async create(@Body() createOrganisationDto: CreateOrganisationDto) {
    const response = await this.organisationService.create(createOrganisationDto);
    return sendObjectResponse(response, "Organisation created");
  }

  @Get()
  async findAll(@Query() pagination: AbstractPaginationDto) {
    const response = await this.organisationService.findAll(pagination);
    return sendPaginatedListReponse(response, 'Success');
  }

  @Get('/list/get')
  async list() {
    const response = await this.organisationService.list();
    return sendListReponse(response, 'Success');
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.organisationService.findOne(id);
    return sendObjectResponse(response, "Success");
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateOrganisationDto: UpdateOrganisationDto,
  ) {
    const response = await this.organisationService.update(id, updateOrganisationDto);
    return sendObjectResponse(response, "Organisation Updated");
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return sendObjectResponse(await this.organisationService.remove(id), "Organisation deleted");
  }
}
