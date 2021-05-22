import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AbstractController } from '../shared/services/abstract-controller.controller';
import { ContactGroupsService } from './contact-groups.service';
import { CreateContactGroupDto } from './dto/create-contact-group.dto';
import { UpdateContactGroupDto } from './dto/update-contact-group.dto';

@ApiTags('Contact Groups')
@Controller('contact-groups')
export class ContactGroupsController extends AbstractController {
  constructor(private readonly contactGroupsService: ContactGroupsService) {
    super();
    this.service = this.contactGroupsService;
    this.name = 'Contact Group';
  }

  @Post()
  create(@Body() createContactGroupDto: CreateContactGroupDto) {
    return super.create(createContactGroupDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateContactGroupDto: UpdateContactGroupDto,
  ) {
    return super.update(id, updateContactGroupDto);
  }
}
