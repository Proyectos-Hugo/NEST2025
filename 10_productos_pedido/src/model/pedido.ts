import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import { Producto } from "./producto";

@Entity('pedidos')
export class Pedido{

    @PrimaryGeneratedColumn()
    idPedido:number;

    @Column()
    codigoProducto:number;

    @Column()
    unidades:number;

    @Column()
    total:number;

    @Column()
    fechaPedido:Date;

    @ManyToOne(()=>Producto, p => p.codigoProducto)
    @JoinColumn({name:"codigoProducto", referencedColumnName:"codigoProducto"})
    producto:Producto;
    
    constructor(idPro?:number, uni?:number, tot?:number, fecha?:Date, producto?:Producto){
        this.idPedido=idPro;
        this.unidades=uni;
        this.total=tot;
        this.fechaPedido=fecha;
        this.producto=producto;
    }
}