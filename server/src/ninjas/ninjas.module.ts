import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NinjasController } from './ninjas.controller';
import { NinjasService } from './ninjas.service';
import { Ninja } from './entities/ninja.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      // Add entities here
      Ninja,
    ]),
  ],
  controllers: [NinjasController],
  providers: [NinjasService],
})
export class NinjasModule {}
