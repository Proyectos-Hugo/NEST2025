import { Module } from '@nestjs/common';
import { PeliculaController } from './controller/pelicula.controller';
import { PeliculaService } from './Service/pelicula.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pelicula } from './Model/pelicula';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database:'peliculas',
    entities: [Pelicula],  
    synchronize: false,
  }),
    
  TypeOrmModule.forFeature([Pelicula])],
  controllers: [PeliculaController],
  providers: [PeliculaService],
})
export class AppModule {}
