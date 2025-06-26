import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './model/alumno';
import { Curso } from './model/curso';
import { MatriculacionController } from './controller/matriculacion.controller';
import { MatriculaService } from './service/Matricula.service';
import { Matricula } from './model/matricula';


@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'formacion',
  entities: [Alumno,Curso,Matricula],
  synchronize: false,
  }),TypeOrmModule.forFeature([Alumno,Curso,Matricula])],
  controllers: [MatriculacionController],
  providers: [MatriculaService],
})
export class AppModule {}
