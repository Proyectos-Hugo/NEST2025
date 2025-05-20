export class Ficha {
    nombre:string;
    edad:number;
    email:string;

    constructor(nom?:string, ed?:number, ema?:string){
        this.nombre=nom;
        this.edad=ed;
        this.email=ema;
    }
}