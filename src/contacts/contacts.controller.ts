import { AbstractPaginationDto } from './../shared/dto/abstract-pagination.dto';
import { Controller, Get, Post, Body, Put, Param, Delete, Query } from '@nestjs/common';
import { sendListReponse, sendObjectResponse, sendPaginatedListReponse } from '../shared/response.transformer';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Contacts')
@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  async create(@Body() createContactDto: CreateContactDto) {
    const response = await this.contactsService.create(createContactDto);
    return sendObjectResponse(response, "Contact created");
  }

  @Get()
  async findAll(@Query() pagination: AbstractPaginationDto) {
    const response = await this.contactsService.findAll(pagination);
    return sendPaginatedListReponse(response, 'Success');
  }

  @Get('/list/get')
  async list() {
    const response = await this.contactsService.list();
    return sendListReponse(response, 'Success');
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const response = await this.contactsService.findOne(id);
    return sendObjectResponse(response, "Success");
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateContactDto: UpdateContactDto) {
    const response = await this.contactsService.update(id, updateContactDto);
    return sendObjectResponse(response, "Contact Updated");
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return sendObjectResponse(await this.contactsService.remove(id), "Contact deleted");
  }
}
