import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Movimientos } from "./Moviminetos";

@Entity("cuentas")
export class Cuenta{
    @PrimaryColumn()
    numeroCuenta:number;
    @Column()
    saldo:number;
    @Column()
    tipoCuenta:string;

    @OneToMany(()=>Movimientos, movimiento => movimiento.cuenta)

    movimientos:Movimientos[];
    constructor(numCuen?:number, sal?:number, tipCuen?:string){
        this.numeroCuenta=numCuen;
        this.saldo=sal;
        this.tipoCuenta=tipCuen;
    }
}