import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Producto } from 'src/model/producto';
import { Pedido } from 'src/model/pedido';
import { ProductoAltaDtos } from 'src/Dtos/productoAltaDtos';
import { ProductosDtos } from 'src/Dtos/productosDtos';

@Injectable()
export class ProductosService {
  constructor(
    @InjectRepository(Producto) private repositoryProductos: Repository<Producto>,
    @InjectRepository(Pedido) private repositoryPedidos: Repository<Pedido>
  ){}

  async save(pro:ProductoAltaDtos):Promise<boolean>{
    const producto = await this.repositoryProductos.createQueryBuilder("productos")
    .where("codigoProducto=:cod",{cod:pro.codigoProducto})
    .getOne();

    if(!producto){
      await this.repositoryProductos.save(pro);
      return true;
    }else{
      return false;
    }
  }

  async catalogo(): Promise<ProductosDtos[]> {
    return await this.repositoryProductos.find();
    
  }
}


