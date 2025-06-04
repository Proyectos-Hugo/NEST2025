import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlumnoAltaDto } from 'src/dto/AlumnoAltaDto';
import { AlumnoResultadoDto } from 'src/dto/AlumnoResultadoDto';
import { Alumno } from 'src/model/alumno';
import { Repository } from 'typeorm';

@Injectable()
export class AlumnosService {
  constructor(@InjectRepository(Alumno) private alumnosRepository:Repository<Alumno>){}
  async findByNoMatriculadoEnCurso(codigoCurso:number):Promise<AlumnoResultadoDto[]>{
    //obtenemos los usuarios matriculados en el curso
    const usuariosEnCurso:string[]=(await this.alumnosRepository.createQueryBuilder("alumno")
      .innerJoinAndSelect("alumno.cursos","c")
      .where("c.idCurso=:codigo",{codigo:codigoCurso})
      .getMany())//Alumno[]
      .map(a=>a.usuario);//string[]
    
    return (await this.alumnosRepository.createQueryBuilder("alumno")
      .where("alumno.usuario not in (:...ids)",{ids:usuariosEnCurso})
      .getMany());
      // .map(a=>new AlumnoResultadoDto(a.usuario,a.password,a.nombre,a.email,a.edad));
  }

  createAlumno(alumno:AlumnoAltaDto):Promise<AlumnoResultadoDto>{
    return this.alumnosRepository.save(alumno);
  }
} 
