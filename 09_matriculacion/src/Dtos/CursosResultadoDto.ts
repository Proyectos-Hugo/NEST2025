export class CuersoResultadoDto{
    idCurso:number;
    nombre:string;

    constructor(idCur?:number, nom?:string){
        this.idCurso=idCur;
        this.nombre=nom;
    }
}