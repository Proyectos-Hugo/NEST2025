import { MatriculaService } from '../service/Matricula.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('matriculacion')
export class MatriculacionController {
  constructor(private matriculacionService:MatriculaService) {}

  @Get('Curso/:idCurso')
  findByCurso(@Param("idCurso")idCurso:number){
    return this.matriculacionService.getCurso(idCurso);
  }
}
