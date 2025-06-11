import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Pedido } from "./pedido";

@Entity('productos')
export class Producto{

    @PrimaryColumn()
    codigoProducto:number;

    @Column()
    producto:string;

    @Column()
    precioUnitario:number;

    @Column()
    stock:number;

    @OneToMany(()=>Pedido, pe =>pe.codigoProducto)
    pedido:Pedido[];

    constructor(codPro?:number, prod?:string, preUni?:number, stock?:number){
        this.codigoProducto=codPro;
        this.producto=prod;
        this.precioUnitario=preUni;
        this.stock=stock;
    } 
}