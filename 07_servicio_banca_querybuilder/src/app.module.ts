import { Cliente } from './model/Cliente';
import { Movimientos } from './model/Moviminetos';
import { Module } from '@nestjs/common';
import { MovimientosController } from './controller/movimientos.controller';
import { CuentaController } from './controller/cuenta.controller';
import { MovimientosService } from './service/movimientos.service';
import { CuentaService } from './service/cuenta.service';
import { ClientesService } from './service/clientes.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuenta } from './model/Cuenta';


@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'nestpass',
  database: 'bancabd',
  entities: [Movimientos,Cuenta,Cliente],
  synchronize: false,
  }),TypeOrmModule.forFeature([Movimientos,Cuenta,Cliente])],
  controllers: [MovimientosController,CuentaController],
  providers: [MovimientosService,CuentaService,ClientesService],
})
export class AppModule {}
