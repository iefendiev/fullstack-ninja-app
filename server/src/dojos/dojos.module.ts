import { Module } from '@nestjs/common';
import { DojosService } from './dojos.service';
import { DojosController } from './dojos.controller';

@Module({
  controllers: [DojosController],
  providers: [DojosService]
})
export class DojosModule {}
