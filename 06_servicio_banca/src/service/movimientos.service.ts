import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movimientos } from 'src/model/Moviminetos';
import { Repository, Between } from 'typeorm';

@Injectable()
export class MovimientosService {
  constructor(@InjectRepository(Movimientos) private movimientosRepository:Repository<Movimientos>) {
  }

  async save(movimiento:Movimientos):Promise<boolean>{
    const resultado = this.movimientosRepository.save(movimiento);
    if(resultado){
      return false;
    }else{
      this.movimientosRepository.save(movimiento);
      return true;
    }
  }

  findByIdCuenta(id:number):Promise<Movimientos[]>{
    return this.movimientosRepository.findBy({idCuenta:id});
  }

  findByDate(fecha1:string, fecha2:string):Promise<Movimientos[]>{
    return this.movimientosRepository.find({
      where: {
        fecha: Between(new Date(fecha1), new Date(fecha2))
      }
    });
  }

}
