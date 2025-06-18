import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompraClienteDto } from '../Dtos/CompraClienteDto';
import { Venta } from '../Model/Venta';
import { Repository } from 'typeorm';


@Injectable()
export class ComprasService {
  constructor(@InjectRepository(Venta) private ventasRepository:Repository<Venta>){
    
  }

  async ventasCliente(usuario:string):Promise<CompraClienteDto[]>{
    const ventas:Venta[]=await this.ventasRepository.createQueryBuilder("venta")
    .innerJoinAndSelect("venta.cliente","c")
    .innerJoinAndSelect("venta.libro","l")
    .where("c.usuario=:us",{us:usuario})
    .getMany();
    return ventas.map(v=>new CompraClienteDto(v.cliente.usuario,v.libro.titulo,v.fecha));
  }
}