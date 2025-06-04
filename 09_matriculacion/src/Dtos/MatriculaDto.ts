export class MatriculaDto {
    usuario:string;
    idCurso:number;
    nota:number;

    constructor(usu?:string, idCur?:number, not?:number){
        this.usuario=usu;
        this.idCurso=idCur;
        this.nota=not;
    }
}