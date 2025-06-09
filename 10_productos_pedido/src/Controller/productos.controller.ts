import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductosService } from 'src/service/productos.service';


@Controller('productoss')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

}
