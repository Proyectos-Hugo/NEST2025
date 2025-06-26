import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
import { Cliente } from "./Cliente";
import { Movimientos } from "./Moviminetos";

@Entity("cuentas")
export class Cuenta{
    @PrimaryColumn()
    numeroCuenta:number;
    @Column()
    saldo:number;
    @Column()
    tipoCuenta:string;
    @OneToMany(()=>Movimientos,movimiento=>movimiento.cuenta)
    movimientos:Movimientos[];
    @ManyToMany(()=>Cliente,cliente=>cliente.cuentas,{cascade:["insert","remove"]})
    @JoinTable({
        name: 'titulares',
        joinColumn: {
            name: 'idCuenta',
            referencedColumnName: 'numeroCuenta',
        },
        inverseJoinColumn: {
            name: 'idCliente',
            referencedColumnName: 'dni',
        },
    })
    clientes:Cliente[];

    constructor(numeroCuenta?:number,saldo?:number,tipoCuenta?:string){
        this.numeroCuenta=numeroCuenta;
        this.saldo=saldo;
        this.tipoCuenta=tipoCuenta;
    }
}