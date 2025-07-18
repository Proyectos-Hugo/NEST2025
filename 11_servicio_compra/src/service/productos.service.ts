import { Injectable, OnModuleInit } from '@nestjs/common';
import axios from 'axios';
import { PedidoDto } from 'src/model/PedidoDto';
import { ProductoDto } from 'src/model/ProductoDto';

@Injectable()
export class ProductosService implements OnModuleInit {
  urlBase="http://localhost:4000";
  token:string;

  async onModuleInit(){
    const preToken = await axios.post(`${this.urlBase}/auth/login`, {
      username: 'admin',
      password: 'admin'
    });

    this.token=preToken.data.valorToken;
  }

 
  async buscarProductos(min:number,max:number):Promise<ProductoDto[]>{
    const response = await axios.get(`${this.urlBase}/tienda/pedidos`, {
    headers: {
      Authorization: `Bearer ${this.token}`
    }
  });

    const jsonFiltrado:any=response.data.filter(p=>p.precioUnitario>=min&&p.precioUnitario<=max);
    const productos:ProductoDto[]=jsonFiltrado.map(
      p=>{
        let disponibilidad:string="";
        if(p.stock>=0&&p.stock<=3){
          disponibilidad="baja"
        }
        if(p.stock>3&&p.stock<=10){
          disponibilidad="media"
        }
        if(p.stock>10){
          disponibilidad="alta";
        }
        return new ProductoDto(p.producto,p.precioUnitario,disponibilidad);
      }
    );
    return productos;
    
  }

  async altaPedido(pedido:PedidoDto):Promise<boolean>{
    try{
      await axios.post(`${this.urlBase}/tienda/altaPedido{
      headers:{
        Authorization: ${this.token}
      }
    `,pedido);
      return true;
    }catch(err){
      return false;
    }
  }
}