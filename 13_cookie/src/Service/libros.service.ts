import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LibroDatosDto } from '../Dtos/LibroDatosDto';
import { Libro } from '../Model/Libro';
import { Repository } from 'typeorm';


@Injectable()
export class LibrosService {
  constructor(@InjectRepository(Libro) private librosRepository:Repository<Libro>){
    
  }

  async catalogo():Promise<LibroDatosDto[]>{
    const libros:Libro[]=await this.librosRepository.find();
    return libros.map(l=>new LibroDatosDto(l.isbn,l.titulo,l.autor,l.precio,l.paginas));
  }
}