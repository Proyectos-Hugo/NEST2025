import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from 'src/model/Cuenta';
import { Movimientos } from 'src/model/Moviminetos';
import { Repository, Between, MoreThan } from 'typeorm';

@Injectable()
export class MovimientosService {
  constructor(
    @InjectRepository(Movimientos) private movimientosRepository: Repository<Movimientos>,
    @InjectRepository(Cuenta) private cuentaRepository: Repository<Cuenta>
  ) {}

  async save(movimiento:Movimientos):Promise<boolean>{
    const resultado = this.movimientosRepository.save(movimiento);
    if(resultado){
      return false;
    }else{
      this.movimientosRepository.save(movimiento);
      return true;
    }
  }

  findByIdCuenta(idCuenta:number):Promise<Movimientos[]>{
    return this.movimientosRepository.find({
      where:{
        cuenta:{
          numeroCuenta:idCuenta
        }
      }
    })
  }

  findByDate(fecha1:string, fecha2:string):Promise<Movimientos[]>{
    return this.movimientosRepository.find({
      where: {
        fecha: Between(new Date(fecha1), new Date(fecha2))
      }
    });
  }

  findByCuentasSaldoMin(saldoMin:number):Promise<Movimientos[]>{
    return this.movimientosRepository.find({
      where:{
        cuenta:{
            saldo:MoreThan(saldoMin)
        }
    },
    relations:["cuenta"]  
    });
 }


 findByFechas(fecha1:Date,fecha2:Date):Promise<Movimientos[]>{
  return this.movimientosRepository.find({
    where:{
        fecha:Between(fecha1,fecha2)
    },
    relations:["cuenta"]
    });
 }

}
