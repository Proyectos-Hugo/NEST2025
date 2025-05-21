import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Cuenta } from 'src/model/cuenta';
import { BancoService } from 'src/service/banco.service';
import { Response } from 'express'; 

@Controller('bancos')
export class BancoController {
  constructor(private readonly bancoService: BancoService) {}

  @Get('buscarNum/:numeroCuenta')
  filtarNumeroCuenta(@Param("numeroCuenta") numCuenta:string, @Res() response:Response):any{
    const cuenta:Cuenta[]= this.bancoService.buscarNumCuenta(numCuenta);

    if(cuenta){
      response.status(200).json(cuenta);
    }else{
      return response.status(419).json(new Cuenta());
    }
  }

  @Get('buscarTit/:titular')
  filtrarTitular(@Param("titular")titular:string, @Res() response:Response): any {
    const cuenta:Cuenta[]= this.bancoService.buscarTitular(titular);

     if(cuenta){
      response.status(200).json(cuenta);
    }else{
      return response.status(419).json(new Cuenta());
    }
  }

  @Get('buscarSal/:saldo')
  filtarMinSaldo(@Param("saldo") saldo: number, @Res() response:Response): any {
    const cuenta:Cuenta[]= this.bancoService.buscarSaldo(saldo);

     if(cuenta){
      response.status(200).json(cuenta);
    }else{
      return response.status(419).json(new Cuenta());
    }
  }

  @Get('buscarTip/:tipo')
  filtrarTipo(@Param("tipo") tipo:string, @Res() response:Response):any{
    const cuenta:Cuenta[]=this.bancoService.buscarTipo(tipo);

     if(cuenta){
      response.status(200).json(cuenta);
    }else{
      return response.status(419).json(new Cuenta());
    }
  }

  @Post('alta')
  alta(@Body() cuenta:Cuenta, @Res() response:Response):void{
    const resultado:boolean = this.bancoService.alta(cuenta);
    if(resultado){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }

   @Delete('borrar/:cuenta')
   borrarCuenta(@Param("cuenta") numeroCuenta:string, @Res() response:Response):any{
      const cuenta:string= this.bancoService.borrarNumCuenta(numeroCuenta);
      if(cuenta){
        return response.status(200).json(cuenta);
      }else{
        return response.status(419).json(new Cuenta());
      }
   }
}
