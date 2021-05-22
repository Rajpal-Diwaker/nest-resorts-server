import { Broadcast } from './entities/broadcast.entity';
import { AbstractService } from './../shared/services/abstract-service.service';
import { Injectable } from '@nestjs/common';
import { CreateBroadcastDto } from './dto/create-broadcast.dto';
import { UpdateBroadcastDto } from './dto/update-broadcast.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BroadcastsService extends AbstractService {
  constructor(
    @InjectRepository(Broadcast)
    private readonly contactGroupRepo: Repository<Broadcast>,
  ) {
    super();
    this.repository = this.contactGroupRepo;
  }

  create(createBrodcastDto: CreateBroadcastDto) {
    return 'This action adds a new brodcast';
  }
}
