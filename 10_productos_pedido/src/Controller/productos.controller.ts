import { PedidosService } from './../service/pedidos.service';
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
import { Response } from 'express';
import { PedidosAltaDtos } from 'src/Dtos/pedidosAltaDtos';
import { ProductoAltaDtos } from 'src/Dtos/productoAltaDtos';
import { ProductosService } from 'src/service/productos.service';


@Controller('tienda')
export class ProductosController {

  constructor(
    private productosService: ProductosService,
    private pedidosService: PedidosService
  ) {}
  
  @Post('altaPedido')
  async altaPedido(@Body() pedido: PedidosAltaDtos, @Res() response: Response) {
    const result = await this.pedidosService.highPedido(pedido);

    if (result) {
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }

  @Post('altaProducto')
  async altaProducto(@Body() producto:ProductoAltaDtos, @Res() response:Response){
    const result = await this.productosService.save(producto);

    if(result){
      response.status(200).send();
    }else{
      response.status(409).send();
    }
  }

  @Get('buquedaPedido')
  buscarPedidos(){
    return this.pedidosService.findAllOrther();
  }

  @Get('busquedaProducto')
  buscarProducto(){
    return this.productosService.catalogo();
  }

}
