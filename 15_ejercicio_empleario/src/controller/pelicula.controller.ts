import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Pelicula } from 'src/Model/pelicula';
import { PeliculaService } from 'src/Service/pelicula.service';


@Controller('pelicula')
export class PeliculaController {
  constructor(private readonly peliculaService: PeliculaService) {}

  @Get('peliculas')
  allMovies(){
    return this.peliculaService.allMovies();
  }

  @Get('PeliculaId/:id')
  allMoviesById(@Param('id') id:number){
    return this.peliculaService.allMoviesById(id);
  }

  @Post('nuevaPelicula')
  saveMovie(@Body() movie:Pelicula){
    return this.peliculaService.saveMovie(movie);
  }

  @Patch('actualizarPelicula/:id')
  updateMovie(@Param('id') id:number, @Body() movie:Pelicula){
    return this.peliculaService.updateMovie(id,movie);
  }

  @Delete('borrarPelicula/:id')
  deleteMovie(@Param('id') id:number){
    return this.peliculaService.deleteMovie(id);
  }
}
