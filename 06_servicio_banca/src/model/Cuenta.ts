import { Cliente } from './Cliente';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm";
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
    @ManyToMany(()=>Cliente, clientes=>clientes.cuentas)
    @JoinTable({
        name: 'titulares',
        joinColumns: [
            {
                name: 'idCuenta',
                referencedColumnName: 'numeroCuenta',
            }
        ],
        inverseJoinColumns: [
            {
                name: 'idCliente',
                referencedColumnName: 'dni',
            }
        ]
    })
    clientes:Cliente[];
    
    constructor(numCuen?:number, sal?:number, tipCuen?:string){
        this.numeroCuenta=numCuen;
        this.saldo=sal;
        this.tipoCuenta=tipCuen;
    }
}