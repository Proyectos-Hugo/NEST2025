import { ProductosService } from 'src/service/productos.service';
import { Module } from '@nestjs/common';
import { ComprasController } from './controller/compras.controller';


@Module({
  imports: [],
  controllers: [ComprasController],
  providers: [ProductosService],
})
export class AppModule {}
