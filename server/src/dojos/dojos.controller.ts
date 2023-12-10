import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { DojosService } from './dojos.service';
import { CreateDojoDto } from './dto/create-dojo.dto';
import { UpdateDojoDto } from './dto/update-dojo.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request as ExpressRequest } from 'express';

export interface AuthRequest extends ExpressRequest {
  user?: { id: number };
  cookies: { [key: string]: string };
}

@UseGuards(AuthGuard)
@Controller('dojos')
export class DojosController {
  constructor(private readonly dojosService: DojosService) {}

  @Post()
  create(@Req() req: AuthRequest, @Body() createDojoDto: CreateDojoDto) {
    return this.dojosService.createDojoForUser(req.user.id, createDojoDto);
  }

  @Get()
  findAll(@Req() req: AuthRequest) {
    // get the user id from token
    const user = req.user;
    return this.dojosService.findAllDojosForUser(user.id);
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
