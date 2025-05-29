import { CuentaController } from './controller/cuenta.controller';
import { Cliente } from './model/Cliente';
import { Module } from '@nestjs/common';
import { MovimientosController } from './controller/movimientos.controller';
import { MovimientosService } from './service/movimientos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimientos } from './model/Moviminetos';
import { Cuenta } from './model/Cuenta';
import { ClienteController } from './controller/clientes.controller';
import { CuentaService } from './service/cuenta.service';
import { ClienteService } from './service/clientes.service';
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
  controllers: [MovimientosController,CuentaController,ClienteController],
  providers: [MovimientosService,CuentaService,ClienteService],
})
export class AppModule {}
