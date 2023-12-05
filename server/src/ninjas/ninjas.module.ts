import { Module } from '@nestjs/common';
import { NinjasController } from './ninjas.controller';
import { NinjasService } from './ninjas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ninja } from './entities/ninja.entity';
import { Dojo } from 'src/dojos/entities/dojo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Ninja, Dojo])], // we need to import the entities we are using
  controllers: [NinjasController],
  providers: [NinjasService],
  exports: [NinjasService],
})
export class NinjasModule {}
