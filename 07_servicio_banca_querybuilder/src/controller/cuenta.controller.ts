import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CuentaService } from 'src/service/cuenta.service';


@Controller('cuentas')
export class CuentaController {
  constructor(private cuentaService: CuentaService) {}

  @Get("buscarPorFecha/:fecha")
  buscarPorFecha(@Param("fecha") fecha:Date){
    return this.cuentaService.listCuentas(fecha);
  }
  @Get("buscarPorCantidad/:cantidad")
  buscarPorCantidad(@Param("cantidad") cantidad:number){
    return this.cuentaService.findByExtraccionMin(cantidad);
  }

}
  

