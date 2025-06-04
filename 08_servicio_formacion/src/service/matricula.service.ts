import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MatriculaNuevaDto } from 'src/dto/MatriculaNuevaDto';
import { Alumno } from 'src/model/alumno';
import { Curso } from 'src/model/curso';
import { Repository } from 'typeorm';

@Injectable()
export class MatriculaService {
   constructor(
    @InjectRepository(Curso) private repositoryCurso:Repository<Curso>,
    @InjectRepository(Alumno) private repositoryAlumno:Repository<Alumno>) {}


  async matricular(matricula:MatriculaNuevaDto):Promise<boolean>{
    const alumno:Alumno=await this.repositoryAlumno.createQueryBuilder("alumno")
      .where("alumno.usuario=:usuario",{usuario:matricula.usuario})
      .getOne();
    const curso:Curso=await this.repositoryCurso.createQueryBuilder("curso")
      .innerJoinAndSelect("curso.alumnos","a")
      .where("curso.idCurso=:idCurso",{idCurso:matricula.idCurso})
      .getOne();
      
    if(!alumno || !curso){
        return false;
    }
    //añadimos el alumno al curso y actualizamos el curso
    curso.alumnos.push(alumno);
    await this.repositoryCurso.save(curso);
    return true;
  }
}
