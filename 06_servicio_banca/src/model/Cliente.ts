import { Column, ManyToMany, PrimaryColumn } from "typeorm";
import { Cuenta } from "./Cuenta";

export class Cliente {
    map(arg0: (m: any) => any): Cuenta[] | PromiseLike<Cuenta[]> {
      throw new Error('Method not implemented.');
    }

    @PrimaryColumn()
    dni:number;
    @Column()
    nombre:string;
    @Column()
    dirrecion:string;
    @Column()
    telefono:number;
    @ManyToMany(()=> cuenta=>cuenta.clientes)
    cuentas:Cuenta[];

    constructor(dni?:number, nombre?:string, dir?:string, telefono?:number){
        this.dni=dni;
        this.nombre=nombre;

    }
}