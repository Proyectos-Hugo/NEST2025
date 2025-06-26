import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CursosService } from '../Service/cursos.service';
import { Curso } from 'src/Model/Curso.schema';


@Controller('cursoss')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post('guardar')
  gurdar(@Body() curso:Curso){
    return this.cursosService.guardar(curso);
  }

  @Get('catalogo')
  catalogo(){
    return this.cursosService.todos();
  }
}
