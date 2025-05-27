import { Module } from '@nestjs/common';
import { MovimientosController } from './controller/movimientos.controller';
import { MovimientosService } from './service/movimientos.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movimientos } from './model/Moviminetos';

@Module({
  imports: [TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nestuser',
  password: 'nestpass',
  database: 'bancabd',
  entities: [Movimientos],
  synchronize: false,
  }),TypeOrmModule.forFeature([Movimientos])],
  controllers: [MovimientosController],
  providers: [MovimientosService],
})
export class AppModule {}
