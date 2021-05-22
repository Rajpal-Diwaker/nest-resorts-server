import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AbstractPaginationDto } from '../shared/dto/abstract-pagination.dto';
import { PaginateItems } from '../shared/response.transformer';
import { AbstractService } from '../shared/services/abstract-service.service';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { Permission } from './entities/permission.entity';

@Injectable()
export class PermissionsService extends AbstractService {
  constructor(
    @InjectRepository(Permission)
    private readonly permissionRepo: Repository<Permission>,
  ) {
    super();
    this.repository = this.permissionRepo;
    this.name = 'Permission';
  }
}
