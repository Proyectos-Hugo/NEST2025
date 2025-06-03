import { CursosService } from './../service/cursos.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { AlumnosService } from 'src/service/alumno.service';
import { MatriculaService } from 'src/service/matricula.service';
import { Response } from 'express';

@Controller('formacion')
export class FormacionController {
  constructor(
    private readonly alumnoService: AlumnosService,
    private readonly cursosService: CursosService,
    private readonly matriculaService: MatriculaService
  ) {}
    
  @Get('buscarNoMatriculado/:codigoCurso')
  findByNoMatriculadoEnCurso(@Param("codigoCurso") codigoCurso:number){
    return this.alumnoService.findByNoMatriculadoEnCurso(codigoCurso)
  }

  @Get('cursos')
  cursos(){
    return this.cursosService.findAll();
  }

  @Post('matricular')
   async matricular(@Body() datos:any,@Res() response:Response){
    const resultado:boolean=await this.matriculaService.matricular(datos.usuario,datos.idCurso);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();

    }
  }
}