import { Query } from '@nestjs/common';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { Movimientos } from 'src/model/Moviminetos';
import { MovimientosService } from 'src/service/movimientos.service';


@Controller('movimientos')
export class MovimientosController {
  constructor(private movimientosService: MovimientosService) {}

  @Post("guardar")
  save(@Body() movimiento:any){
    const mov = this.movimientosService.save(movimiento);
    if(mov){
      return "Movimiento realizado";
    }else{
      return "Error al realizar el movimiento";
    }
  }

  @Get('cuenta/:id')
  findByIdMovimientos(@Param("id")id:number):Promise<Movimientos[]>{
    return this.movimientosService.findByIdCuenta(id);
  }

  @Get('fecha')
  findByDate(@Query("fecha1")fecha1:string,@Query("fecha2")fecha2:string){
    console.log(fecha1,fecha2);
    return this.movimientosService.findByDate(fecha1,fecha2);
  }
  
}