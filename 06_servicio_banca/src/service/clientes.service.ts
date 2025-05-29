import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from 'src/model/Cliente';
import { Cuenta } from 'src/model/Cuenta';
import { Movimientos } from 'src/model/Moviminetos';
import { MoreThan, Repository } from 'typeorm';
 
@Injectable()
export class ClienteService {
   constructor(
       @InjectRepository(Movimientos) private movimientosRepository: Repository<Movimientos>,
       @InjectRepository(Cuenta) private cuentaRepository: Repository<Cuenta>,
       @InjectRepository(Cliente) private clienteRepository: Repository<Cliente>
     ) {}
     async finDni(dni:number):Promise<Cuenta[]>{
    const cliente:Cliente = await this.clienteRepository.findOne({
      where: { dni: dni },
      relations: ["titulares"]
    });

    
    if(cliente) {
      return cliente.cuentas;
    }else{
      return [];
    }  
  }


}