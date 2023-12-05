import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDojoDto } from './dto/create-dojo.dto';
import { UpdateDojoDto } from './dto/update-dojo.dto';
import { Dojo } from './entities/dojo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DojosService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Dojo)
    private dojoRepository: Repository<Dojo>,
  ) {}

  async createDojoForUser(createDojoDto: CreateDojoDto): Promise<Dojo> {
    const { userId } = createDojoDto;
    const user = await this.userRepository.findOneBy({ id: userId });
    const { password, ...userWithoutPassword } = user;

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const newDojo = this.dojoRepository.create({
      ...createDojoDto,
      user: userWithoutPassword,
    });

    return this.dojoRepository.save(newDojo);
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
