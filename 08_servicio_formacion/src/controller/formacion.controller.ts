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

import { CursosService } from 'src/service/cursos.service';
import {Response} from 'express';
import { AlumnosService } from 'src/service/alumno.service';
import { MatriculaService } from '../service/matricula.service';
import { MatriculaNuevaDto } from 'src/dto/MatriculaNuevaDto';
import { CursoAltaDto } from 'src/dto/CursoAltaDto';
import { AlumnoAltaDto } from 'src/dto/AlumnoAltaDto';


@Controller('formacion')
export class FormacionController {
  constructor(private readonly alumnosService: AlumnosService,
    private readonly cursosService: CursosService,
    private readonly matriculasService: MatriculaService
  ) {}
  @Get('cursos')
  cursos(){
    return this.cursosService.findAll();
  }
  @Get('noMatriculados/:idCurso')
  alumnosNoMatriculados(@Param("idCurso") idCurso:number){
    return this.alumnosService.findByNoMatriculadoEnCurso(idCurso);
  }
 /* @Post('matricular/:idCurso/:usuario')
  async matricular(@Param("idCurso")idCurso:number,@Param("usuario")usuario:string,@Res() response:Response){
    const resultado:boolean=await this.matriculasService.matricular(usuario,idCurso);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }*/
  @Post('matricular')
  async matricular(@Body() datos:MatriculaNuevaDto, @Res() response:Response){
    const resultado:boolean = await this.matriculasService.matricular(datos);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }

  @Post('nuevoCurso')
  async newCurso(@Body() datos:CursoAltaDto, @Res() response:Response){
    const resultado = await this.cursosService.createCurso(datos);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }

  @Post('alumnoAlta')
  async newAlumno(@Body() datos:AlumnoAltaDto, @Res() response:Response){
    const result = await this.alumnosService.createAlumno(datos);
    if(result){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }
}