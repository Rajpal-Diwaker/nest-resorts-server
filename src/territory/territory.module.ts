import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TerritoryService } from './territory.service';
import { TerritoryController } from './territory.controller';
import { Territory } from './entities/territory.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Territory])],
  controllers: [TerritoryController],
  providers: [TerritoryService]
})
export class TerritoryModule {}
