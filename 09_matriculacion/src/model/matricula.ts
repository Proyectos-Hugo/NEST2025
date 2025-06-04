import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Alumno } from "./alumno";
import { Curso } from "./curso";

@Entity("matriculas")
export class Matricula{
    @PrimaryColumn()
    idCurso:number;

    @ManyToOne(()=>Alumno,a=>a.matriculas)
    @JoinColumn({name:"usuario",referencedColumnName:"usuario"})
    alumno:Alumno;
    @ManyToOne(()=>Curso,c=>c.matriculas)
    @JoinColumn({name:"idCurso",referencedColumnName:"idCurso"})
    curso:Curso;

    @Column()
    nota:number;
    usuario:string;

    constructor(usuario?:string,idCurso?:number,nota?:number){
        this.idCurso=idCurso;
        this.nota=nota;
        this.usuario=usuario;
    }
}