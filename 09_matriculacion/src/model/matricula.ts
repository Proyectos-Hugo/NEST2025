import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Alumno } from "./alumno";
import { Curso } from "./curso";

@Entity("matriculas")
export class Matricula{
    @ManyToOne(()=>Alumno,a=>a.matriculas)
    @JoinColumn({name:"usuario",referencedColumnName:"usuario"})
    alumno:Alumno;
    @ManyToOne(()=>Curso,c=>c.matriculas)
    @JoinColumn({name:"idCurso",referencedColumnName:"idCurso"})
    curso:Curso;

    @Column()
    nota:number;

    idCurso:number;
    usuario:string;

    constructor(usuario?:string,idCurso?:number,nota?:number){
        this.idCurso=idCurso;
        this.nota=nota;
        this.usuario=usuario;
    }
}