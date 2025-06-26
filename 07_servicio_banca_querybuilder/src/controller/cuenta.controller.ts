import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import {Response} from 'express';
import { Cuenta } from 'src/model/Cuenta';
import { CuentaService } from 'src/service/cuenta.service';

@Controller('cuentas')
export class CuentaController {
  constructor(private readonly cuentasService: CuentaService) {}
  @Get("buscarPorFecha/:fecha")
  buscarPorFecha(@Param("fecha") fecha:Date){
    return this.cuentasService.findByMovimientosFecha(fecha);
  }
  @Get("buscarPorCantidad/:cantidad")
  buscarPorCantidad(@Param("cantidad") cantidad:number){
    return this.cuentasService.findByExtraccionMin(cantidad);
  }

  //endpoint que a partir del dni del cliente devuelva sus cuentas. 
  //si ese cliente no existe o no tiene cuentas, se devuelve un 409
  @Get("buscarPorDni/:dni")
  async buscarPorDni(@Param("dni") dni:number, @Res() response:Response){
    const cuentas:Cuenta[]=await this.cuentasService.findByDni(dni);
    if(cuentas.length>0){
      response.status(200).json(cuentas);
    }else{
      response.status(409).json([]);
    }
  }
  @Post('alta')
  altaCuenta(@Body() datos:any){
    const cuenta:Cuenta=datos.cuenta;
    const dnis:number[]=datos.dnis;
    this.cuentasService.altaCuenta(cuenta,dnis);
  }
  @Get("saldoMedio")
  saldoMedio(){
    return this.cuentasService.saldoMedio();
  }
}