import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculasDto } from 'src/Dtos/MatriculaDto';
import { Alumno } from 'src/model/alumno';
import { Matricula } from 'src/model/matricula';
import { Repository } from 'typeorm';

@Injectable()
export class MatriculaService {

  constructor(
     @InjectRepository(Matricula) private repositoryMatricula:Repository<Matricula>
  ){}

  async getCurso(idCurso:number):Promise<MatriculasDto[]>{
    const matriculas:Matricula[]=await this.repositoryMatricula.createQueryBuilder("matriculas")
      .innerJoinAndSelect("matriculas.curso","c")
      .innerJoinAndSelect("matriculas.alumno","a")
      .where("c.idCurso=:idCurso",{idCurso:idCurso})
      .getMany();
    console.log(matriculas);
    return matriculas.map(m=>new MatriculasDto(m.alumno.nombre,m.alumno.email,m.curso.nombre,m.nota));
  }
  
}
