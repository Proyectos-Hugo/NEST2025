import {
  Body,
  Controller,
  Delete,
  Get,
  Param,

} from '@nestjs/common';
import { PaisesService } from '../service/paises.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('pais')
export class PaisController {
  constructor(private paisService: PaisesService) {}

  @Get('continentes')
  buscarContinente(){
    return this.paisService.findAllContinentes();
  }

  @ApiOperation({summary:"lista de continentes",description:"a partir del nombre del continente, devuelve la lista de paises"})
  
  @Get('paisesContinente/:continente')
  paisesContinente(@Param("continente")continente:string){
    return this.paisService.findByContinente(continente);
  }

  @Get('poblacion')
  poblacionContiente(){
    return this.paisService.findPoblacionMax();
  } 
  
}
