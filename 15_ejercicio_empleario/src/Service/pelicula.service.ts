import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DeleteResult } from 'typeorm';
import { Pelicula } from 'src/Model/pelicula';
import { PeliculaAltaDto } from 'src/DTOs/PeliculaAltaDto';
import { PeliculaDatosDto } from 'src/DTOs/PeliculaDatosDto';


@Injectable()
export class PeliculaService {
  
  constructor(@InjectRepository(Pelicula) private peliculaRepository: Repository<Pelicula>) { }
  
  allMovies():Promise<PeliculaDatosDto[]>{
    return this.peliculaRepository.find();
  }

  allMoviesById(id:number):Promise<PeliculaDatosDto>{
    return this.peliculaRepository.findOneBy({id_peli:id})
  }

  saveMovie(Movie:Pelicula):Promise<PeliculaAltaDto>{
    return this.peliculaRepository.save(Movie);
  }

  async updateMovie(id:number, movie:Pelicula):Promise<PeliculaAltaDto>{
    await this.peliculaRepository.update({id_peli:id}, movie);
    return this.peliculaRepository.findOneBy({id_peli:id});
  }

  async deleteMovie(id:number):Promise<boolean>{
    const result:DeleteResult=await this.peliculaRepository.delete({id_peli:id});
    return result.affected>0;
  }
}
