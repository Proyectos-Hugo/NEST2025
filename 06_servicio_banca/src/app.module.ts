import { Module } from '@nestjs/common';
import { MovimientosController } from './controller/movimientos.controller';
import { MovimientosService } from './service/movimientos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimientos } from './model/Moviminetos';
import { Cuenta } from './model/Cuenta';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'nestpass',
  database: 'bancabd',
  entities: [Movimientos,Cuenta],
  synchronize: false,
  }),TypeOrmModule.forFeature([Movimientos,Cuenta])],
  controllers: [MovimientosController],
  providers: [MovimientosService],
})
export class AppModule {}
