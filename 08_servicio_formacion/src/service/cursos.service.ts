import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CursoAltaDto } from 'src/dto/CursoAltaDto';
import { CursoResultadoDto } from 'src/dto/CursoResultadoDto';
import { Curso } from 'src/model/curso';
import { Repository } from 'typeorm';


@Injectable()
export class CursosService {
  constructor(@InjectRepository(Curso) private readonly cursosRepository:Repository<Curso>){
    
  }

  async findAll(): Promise<CursoResultadoDto[]> {
    return (await this.cursosRepository.find()); //Curso[]
  }

  createCurso(curso:CursoAltaDto): Promise<CursoAltaDto>{
    return this.cursosRepository.save(curso);
  }
}