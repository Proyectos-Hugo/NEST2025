import {
  Body,
  Controller,
  // Delete,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { Cuenta } from 'src/model/cuenta';
import { BancoService } from 'src/service/banco.service';


@Controller('bancos')
export class BancoController {
  constructor(private readonly bancoService: BancoService) {}

  @Get('buscarNum/:numeroCuenta')
  filtarNumeroCuenta(@Param("Numero Cuenta") numCuenta:string):Cuenta[]{
    return this.bancoService.buscarNumCuenta(numCuenta);
  }

  @Get('buscarTit/:titular')
  filtrarTitular(@Param("Titular")titular:string):Cuenta[]{
    return this.bancoService.buscarTitular(titular);
  }

  @Get('buscarSal/:saldo')
  filtarMinSaldo(@Param("Saldo") saldo: number): Cuenta[] {
    const cuentas = this.bancoService.buscarSaldo(saldo);
    return cuentas.filter(cuenta => cuenta.saldo > 1000);
  }

  @Get('buscarTip/:tipo')
  filtrarTipo(@Param("Tipo") tipo:string):Cuenta[]{
    return this.bancoService.buscarTipo(tipo);
  }

  @Post('alta')
  alta(@Body("alta")cuenta:Cuenta):string{
    if(this.bancoService.alta(cuenta)){
      return "Cuenta dada de alta";
    }else{
      return "la cuenta ya existe";
    }
  }

  // @Delete('borrar/:cuenta')
  // borrarCuenta(@Param("cuenta") numeroCuenta:string):string{
  //   if(this.bancoService.borrarNumCuenta(numeroCuenta)){
  //     return "Cuenta dada de baja";
  //   }else{
  //     return "La cuenta no existe";
  //   }
  // }
}
