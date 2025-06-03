import { Module } from '@nestjs/common';
import { FormacionController } from './controller/formacion.controller';
import { CursosService } from './service/cursos.service';
import { AlumnosService } from './service/alumno.service';
import { MatriculaService } from './service/matricula.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Alumno } from './model/alumno';
import { Curso } from './model/curso';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'nestpass',
  database: 'formacion',
  entities: [Alumno,Curso],
  synchronize: false,
  }),TypeOrmModule.forFeature([Alumno,Curso])],
  controllers: [FormacionController],
  providers: [MatriculaService,AlumnosService,CursosService],
})
export class AppModule {}
