import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cuenta } from 'src/model/Cuenta';
import { Movimientos } from 'src/model/Moviminetos';
import { MoreThan, Repository } from 'typeorm';

@Injectable()
export class CuentaService {
  constructor(
      @InjectRepository(Movimientos) private movimientosRepository: Repository<Movimientos>,
      @InjectRepository(Cuenta) private cuentaRepository: Repository<Cuenta>
    ) {}

    async listCuentas(fecha1: string): Promise<Cuenta[]> {
    const movimientos = await this.movimientosRepository.find({
      where: { 
        fecha: new Date(fecha1) 
      },
      relations: ['cuenta'], 
    });

    return movimientos.map(mov=>mov.cuenta)
  }

  async findByExtraccionMin(cantidad:number):Promise<Cuenta[]>{
    const movimientos:Movimientos[]= await this.movimientosRepository.find({
      where:{
        cantidad:MoreThan(cantidad),
        operacion:"extracción"
      },
      relations: ["cuenta"]
    })
    return movimientos.map(m=>m.cuenta);
  }

}
