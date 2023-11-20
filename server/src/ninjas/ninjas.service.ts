import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Ninja } from './entities/ninja.entity';

@Injectable()
export class NinjasService {
  constructor(
    @InjectRepository(Ninja) private ninjaRepository: Repository<Ninja>,
  ) {}

  // private ninjas = [
  //   { id: '1', name: 'Ryu', belt: 'black' },
  //   { id: '2', name: 'Yoshi', belt: 'orange' },
  // ];

  // belt?: 'black' | 'orange' query param
  getNinjas() {
    // find is SELECT from table query
    // retrieves options for further filtering
    return this.ninjaRepository.find();
  }

  getNinja(id: string) {
    // const foundNinja = this.ninjas.find((ninja) => ninja.id === id);
    // if (foundNinja) {
    //   return foundNinja;
    // }
    // throw new NotFoundException(`Ninja with id ${id} not found`);

    return this.ninjaRepository.findOneBy({ id });
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    // save it to the db
    const newNinja = this.ninjaRepository.create(createNinjaDto);
    return this.ninjaRepository.save(newNinja);
  }

  async updateNinja(id: string, updateNinjaDto: UpdateNinjaDto) {
    // ===============
    // update it to db
    // get one
    // perform changes
    // save it
    const foundNinja = await this.ninjaRepository.findOneBy({ id });
    // returns the updated ninja
    return this.ninjaRepository.save({ ...foundNinja, ...updateNinjaDto });
    // alternative: but returns the query result
    // return this.ninjaRepository.update(id, updateNinjaDto);
  }

  async removeNinja(id: string) {
    // remove from the db
    // this refers to the service itself
    const foundNinja = await this.ninjaRepository.findOneBy({ id });
    return this.ninjaRepository.remove(foundNinja);
  }
}
