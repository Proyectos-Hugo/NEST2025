import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LibreriaController } from './controller/libreria.controller';
import { Cliente } from 'src/Model/Cliente';
import { Libro } from 'src/Model/Libro';
import { Venta } from './Model/Venta';
import { ClientesService } from 'src/Service/clientes.service';
import { ComprasService } from 'src/Service/compras.service';
import { LibrosService } from 'src/Service/libros.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database:'libros',
    entities: [Cliente, Libro, Venta], // Tablas de la base de datos 
    synchronize: false,
  }),
    
  TypeOrmModule.forFeature([Cliente, Libro, Venta])],
  controllers: [ LibreriaController],
  providers: [ClientesService, LibrosService,ComprasService ],
})
export class AppModule {}