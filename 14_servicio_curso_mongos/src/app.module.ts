import { Module } from '@nestjs/common';
import { CursosController } from './controller/cursos.controller';
import { CursosService } from './Service/cursos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Curso, CursoSchema } from './Model/Curso.schema';


@Module({
  imports: [MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }]),
            MongooseModule.forRoot('mongodb://localhost:27017/escuela')],
  controllers: [CursosController],
  providers: [CursosService],
})
export class AppModule {}
