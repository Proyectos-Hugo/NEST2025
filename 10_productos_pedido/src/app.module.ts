import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pedido } from './model/pedido';
import { Producto } from './model/producto';
import { ProductosController } from './Controller/productos.controller';
import { PedidosService } from './service/pedidos.service';
import { ProductosService } from './service/productos.service';


@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'nestpass',
  database: 'tiendavirtual',
  entities: [Pedido,Producto],
  synchronize: false,
  }),TypeOrmModule.forFeature([Pedido,Producto])],
  controllers: [ProductosController],
  providers: [PedidosService,ProductosService],
})
export class AppModule {}
