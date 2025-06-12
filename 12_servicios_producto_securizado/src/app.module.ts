import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Producto } from './model/producto';
import { Pedido } from './model/pedido';
import { PedidosProductosController } from './Controller/pedidos-productos.controller';
import { ProductosService } from './service/productos.service';
import { PedidosService } from './service/pedidos.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AutenticacionController } from './Controller/AutenticacionController';
import { AutenticacionService } from './service/authenticacion.service';
import { UsuariosService } from './service/usuarios.service';
import { JwtStrategy } from './Security/jwt.strategy';
import { Usuario } from './model/usuario';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'nestuser',
    password: 'nestpass',
    database: 'tiendavirtual',
    entities: [Pedido,Producto,Usuario],
    synchronize: false,
  }),
  PassportModule,
  JwtModule.register({
    secret: 'mysecret',
    signOptions: { expiresIn: '1h' },
    }),
  TypeOrmModule.forFeature([Pedido,Producto,Usuario])],
  controllers: [PedidosProductosController,AutenticacionController],
  providers: [PedidosService,ProductosService,AutenticacionService,UsuariosService,JwtStrategy],
})
export class AppModule {}