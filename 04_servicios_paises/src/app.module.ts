import { Module } from '@nestjs/common';
import { PaisesService } from './service/paises.service';
import { PaisController } from './controller/pais.controller';


@Module({
  imports: [],
  controllers: [PaisController],
  providers: [PaisesService],
})
export class AppModule {}
