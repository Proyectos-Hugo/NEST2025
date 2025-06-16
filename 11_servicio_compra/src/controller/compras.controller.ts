import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import {Response} from 'express';
import { PedidoDto } from 'src/model/PedidoDto';
import { ProductosService } from 'src/service/productos.service';


@Controller('productos')
export class ComprasController {
  constructor(private readonly productosService: ProductosService) {}
  @Get('catalogo')
  buscarProductos(@Query("min") min:number,@Query("max") max:number){
    return this.productosService.buscarProductos(min,max);
  }
  @Post("altaPedido")
  async nuevoPedido(@Body() pedido:PedidoDto,@Res() response:Response){
    const resp:boolean=await this.productosService.altaPedido(pedido);
    if(resp){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }

}