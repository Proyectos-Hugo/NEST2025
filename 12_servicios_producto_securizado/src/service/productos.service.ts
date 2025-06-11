import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Producto } from 'src/model/producto';
import { ProductoAltaDtos } from '../Dtos/productoAltaDtos'; // Adjust the path as needed

import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
  constructor(@InjectRepository(Producto) private productosRepository:Repository<Producto>){
    
  }

  async alta(producto:ProductoAltaDtos):Promise<boolean>{
    //buscamos un producto con ese código
    const prod:Producto=await this.productosRepository.createQueryBuilder("producto")
    .where("codigoProducto=:cod",{cod:producto.codigoProducto})
    .getOne();
    //si existe, no se puede dar de alta y devolvemos false
    //si no existe, se da de alta y devolvemos true
    if(prod){
      return false;
    }else{
      this.productosRepository.save(producto);
      return true;
    }
  }
  async catalogo():Promise<ProductoAltaDtos[]>{
    const resultado:Producto[]=await this.productosRepository.find();
    return resultado.map(p=>new ProductoAltaDtos(p.codigoProducto,p.producto,p.precioUnitario,p.stock));  
  }
}