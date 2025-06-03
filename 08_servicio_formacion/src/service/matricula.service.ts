import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alumno } from 'src/model/alumno';
import { Curso } from 'src/model/curso';
import { Repository } from 'typeorm';

@Injectable()
export class MatriculaService {
   constructor(
    @InjectRepository(Curso) private repositoryCurso:Repository<Curso>,
    @InjectRepository(Alumno) private repositoryAlumno:Repository<Alumno>) {}


  async matricular(usuario:string,idCurso:number):Promise<boolean>{
    const alumn:Alumno = await this.repositoryAlumno.createQueryBuilder("alumno")
      .where("alumno.alumno.usuario=: usuario",{usuario:usuario})
      .getOne();
    const curso:Curso = await this.repositoryCurso.createQueryBuilder("curso")
      .where("curso.idCurso=:idCurso", {idCurso:idCurso})
      .getOne();

    if(!alumn || !curso){
      return false;
    }
    curso.alumnos.push(alumn);
    await this.repositoryCurso.save(curso);
    return true;

  }
}
