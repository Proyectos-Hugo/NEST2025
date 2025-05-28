import { Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Entity } from "typeorm";
import { Cuenta } from "./Cuenta";

@Entity("movimientos")
export class Movimientos{
    @PrimaryGeneratedColumn("identity")
    idMovimiento:number;
    @Column({type:"datetime"})
    fecha:Date;
    @Column()
    cantidad:number;
    @Column()
    operacion:string;

    @ManyToOne(()=>Cuenta,cuenta=>cuenta.movimientos)
    @JoinColumn({name:"idCuenta",referencedColumnName:"numeroCuenta"})
    cuenta:Cuenta;
    constructor(idMovimiento?:number,cuenta?:Cuenta,fecha?:Date,cantidad?:number, operacion?:string){
        this.idMovimiento=idMovimiento || 0;
        this.cuenta= cuenta || null;
        this.fecha=fecha || new Date();
        this.cantidad=cantidad || 0;
        this.operacion=operacion || '';
    }
}