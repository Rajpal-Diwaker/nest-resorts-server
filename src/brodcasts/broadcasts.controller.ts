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
import { BroadcastsService } from './broadcasts.service';
import { CreateBroadcastDto } from './dto/create-broadcast.dto';
import { UpdateBroadcastDto } from './dto/update-broadcast.dto';

@ApiTags('Broadcast')
@Controller('broadcasts')
export class BroadcastsController extends AbstractController {
  constructor(private readonly brodcastsService: BroadcastsService) {
    super();
    this.service = this.brodcastsService;
    this.name = 'Product';
  }

  @Post()
  create(@Body() createBrodcastDto: CreateBroadcastDto) {
    return super.create(createBrodcastDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateBrodcastDto: UpdateBroadcastDto,
  ) {
    return super.update(id, updateBrodcastDto);
  }
}
