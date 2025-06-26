import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimientos } from 'src/model/Moviminetos';
import { Between, CustomRepositoryCannotInheritRepositoryError, MoreThan, Repository } from 'typeorm';


@Injectable()
export class MovimientosService {
 constructor(@InjectRepository(Movimientos) private repository:Repository<Movimientos>){
  
 }

 save(movimiento:Movimientos):void{
  this.repository.save(movimiento);
 }

 findByIdCuenta(idCuenta:number):Promise<Movimientos[]>{
  
  return this.repository.createQueryBuilder("movimiento")
    .innerJoinAndSelect("movimiento.cuenta","c")
    .where("c.numeroCuenta=:numCuenta",{numCuenta:idCuenta})
    .getMany();
 }
 findByCuentasSaldoMin(saldoMin:number):Promise<Movimientos[]>{
   
    return this.repository.createQueryBuilder("movimiento")
    .innerJoinAndSelect("movimiento.cuenta","c")
    .where("c.saldo>:cant",{cant:saldoMin})
    .getMany();
 }


 findByFechas(fecha1:Date,fecha2:Date):Promise<Movimientos[]>{
  return this.repository.createQueryBuilder("movimiento")
    .innerJoinAndSelect("movimiento.cuenta","c")
    .where("movimiento.fecha between :f1 and :f2",{f1:fecha1,f2:fecha2})
    .getMany();
  }
}