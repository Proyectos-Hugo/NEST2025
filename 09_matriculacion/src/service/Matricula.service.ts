import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculaDto } from 'src/Dtos/MatriculaDto';
import { Alumno } from 'src/model/alumno';
import { Repository } from 'typeorm';

@Injectable()
export class MatriculaService {
  constructor(
     @InjectRepository(Alumno) private repositoryAlumno:Repository<Alumno>
  ){}

  async getCurso(codigoCurso: number): Promise<MatriculaDto[]> {
    const alumnos = (await this.repositoryAlumno.createQueryBuilder("curso")
      .innerJoinAndSelect("curso.", "c")
      .where("c.idCurso=:codigo", { codigo: codigoCurso })
      .getMany()) // Alumno[]
      
    return alumnos.map(a => {
      const dto = new MatriculaDto();
      return dto;
    });
  }
  
}
