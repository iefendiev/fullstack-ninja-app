import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { Ninja } from './entities/ninja.entity';
import { Dojo } from 'src/dojos/entities/dojo.entity';

@Injectable()
export class NinjasService {
  constructor(
    @InjectRepository(Ninja)
    private ninjaRepository: Repository<Ninja>,
    @InjectRepository(Dojo)
    private dojoRepository: Repository<Dojo>,
  ) {}

  getNinjas() {
    return this.ninjaRepository.find();
  }

  getNinja(id: string) {
    return this.ninjaRepository.findOneBy({ id });
  }

  async addNinjaToDojo(
    dojoId: string,
    ninjaData: CreateNinjaDto,
  ): Promise<Ninja> {
    const dojo = await this.dojoRepository.findOneBy({ id: +dojoId });

    if (!dojo) {
      throw new NotFoundException('Dojo not found');
    }

    // Create ninja if Dojo is found and save to DB
    const newNinja = this.ninjaRepository.create({
      ...ninjaData,
      dojo,
    });

    return this.ninjaRepository.save(newNinja);
  }

  async updateNinja(id: string, updateNinjaDto: UpdateNinjaDto) {
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
