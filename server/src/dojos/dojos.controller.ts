import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DojosService } from './dojos.service';
import { CreateDojoDto } from './dto/create-dojo.dto';
import { UpdateDojoDto } from './dto/update-dojo.dto';

@Controller('dojos')
export class DojosController {
  constructor(private readonly dojosService: DojosService) {}

  @Post()
  create(@Body() createDojoDto: CreateDojoDto) {
    return this.dojosService.create(createDojoDto);
  }

  @Get()
  findAll() {
    return this.dojosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dojosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDojoDto: UpdateDojoDto) {
    return this.dojosService.update(+id, updateDojoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dojosService.remove(+id);
  }
}
