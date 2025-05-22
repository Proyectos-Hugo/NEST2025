import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { PaisesService } from '../service/paises.service';

@Controller('pais')
export class PaisController {
  constructor(private paisService: PaisesService) {}

  @Get('continentes')
  buscarContinente(){
    return this.paisService.findAllContinentes();
  }

  @Get('paisesContinente/:continente')
  paisesContinente(@Param("continente")continente:string){
    return this.paisService.findByContinente(continente);
  }

  @Get('poblacion')
  poblacionContiente(){
    return this.paisService.findPoblacionMax();
  } 
  
}
