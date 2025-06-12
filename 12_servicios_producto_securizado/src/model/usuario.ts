import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("seguridad")
export class Usuario{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    username:string;
    @Column()
    password:string;
    @Column()
    role:string;

    constructor(id?:number, userna?:string, pass?:string, role?:string){
        this.id=id;
        this.username=userna;
        this.password=pass;
        this.role=role;
    }
}