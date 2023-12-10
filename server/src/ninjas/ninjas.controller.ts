import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { NinjasService } from './ninjas.service';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@UseGuards(AuthGuard)
@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas() {
    return this.ninjasService.getNinjas();
  }

  @Get(':id')
  getNinja(@Param('id') id: string) {
    return this.ninjasService.getNinja(id);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.addNinjaToDojo(createNinjaDto);
  }

  @Put(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(id, updateNinjaDto);
  }

  @Delete(':id')
  removeNinja(@Param('id') id: string) {
    return this.ninjasService.removeNinja(id);
  }
}
