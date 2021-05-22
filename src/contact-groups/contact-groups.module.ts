import { ContactGroup } from './entities/contact-group.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ContactGroupsService } from './contact-groups.service';
import { ContactGroupsController } from './contact-groups.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ContactGroup]), ContactGroup],
  controllers: [ContactGroupsController],
  providers: [ContactGroupsService],
})
export class ContactGroupsModule {}
