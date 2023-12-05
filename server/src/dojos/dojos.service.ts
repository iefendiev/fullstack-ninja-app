import { Injectable } from '@nestjs/common';
import { CreateDojoDto } from './dto/create-dojo.dto';
import { UpdateDojoDto } from './dto/update-dojo.dto';

@Injectable()
export class DojosService {
  create(createDojoDto: CreateDojoDto) {
    return 'This action adds a new dojo';
  }

  findAll() {
    return `This action returns all dojos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dojo`;
  }

  update(id: number, updateDojoDto: UpdateDojoDto) {
    return `This action updates a #${id} dojo`;
  }

  remove(id: number) {
    return `This action removes a #${id} dojo`;
  }
}
