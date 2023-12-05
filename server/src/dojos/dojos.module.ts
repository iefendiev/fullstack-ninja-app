import { Module } from '@nestjs/common';
import { DojosService } from './dojos.service';
import { DojosController } from './dojos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';
import { Dojo } from './entities/dojo.entity';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Dojo, User])],
  controllers: [DojosController],
  providers: [DojosService],
  exports: [DojosService],
})
export class DojosModule {}
