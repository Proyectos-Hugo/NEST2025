import {
  Body,
  Controller,
  Get,
  Param,
  Post,


} from '@nestjs/common';
import { Item } from 'src/model/Item';
import { BuscadorService } from 'src/service/buscador.service';


@Controller('buscador')
export class BuscadorController {
  constructor(private buscadorService: BuscadorService) {}
  
  @Get('buscar/:tematica')
  buscar(@Param("tematica")tematica:string):Item[]{
    return this.buscadorService.buscar(tematica);
  }

  @Post('alta')
  alta(@Body() item:Item):string{
    this.buscadorService.alta(item);
    return "alta realizada";
  }
}
