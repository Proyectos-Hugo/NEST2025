import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidosAltaDtos } from 'src/Dtos/pedidosAltaDtos';
import { PedidosDtos } from 'src/Dtos/pedidosDtos';
import { Pedido } from 'src/model/pedido';
import { Producto } from 'src/model/producto';
import { Repository } from 'typeorm';

@Injectable()
export class PedidosService {
  
  constructor(
    @InjectRepository(Producto) private repositoryProductos: Repository<Producto>,
    @InjectRepository(Pedido) private repositoryPedidos: Repository<Pedido>
  ){}

  async findAllOrther():Promise<PedidosDtos[]>{
    const result:Pedido[] = await this.repositoryPedidos.createQueryBuilder("pedido")
    .innerJoinAndSelect("pedido.producto","p")
    .getMany();

    return result.map(m=> new PedidosDtos(m.producto.producto, m.unidades,m.total,m.fechaPedido))
  }

  async highPedido(pedido:PedidosAltaDtos):Promise<Boolean>{
    const prod:Producto = await this.repositoryProductos.findOneBy({producto:pedido.producto});

    if(!prod || prod.stock<pedido.unidades){
      return false;
    }
    if(prod){
      prod.stock= prod.stock-pedido.unidades;
      this.repositoryProductos.save(prod);
      const pedidoNuevo:Pedido = new Pedido(0,pedido.unidades,pedido.unidades*prod.precioUnitario, new Date(), prod);
      this.repositoryPedidos.save(pedidoNuevo);
      return true;
    }
  }
}
