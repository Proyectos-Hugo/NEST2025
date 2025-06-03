import { CuentasService } from 'src/service/cuenta.service';
import { Cliente } from './model/Cliente';
import { Module } from '@nestjs/common';
import { MovimientosController } from './controller/movimientos.controller';
import { MovimientosService } from './service/movimientos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimiento } from './model/Moviminetos';
import { Cuenta } from './model/Cuenta';
import { ClientesService } from './service/clientes.service';
@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'nestpass',
  database: 'bancabd',
  entities: [Movimiento,Cuenta,Cliente],
  synchronize: false,
  }),TypeOrmModule.forFeature([Movimiento,Cuenta,Cliente])],
  controllers: [MovimientosController,CuentasService],
  providers: [MovimientosService,CuentasService,ClientesService],
})
export class AppModule {}
