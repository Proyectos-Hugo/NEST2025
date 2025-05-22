export class Pais{
    nombre:string;
    continente:string;
    poblacion:number;
    capital:string;
    bandera:string;

    constructor(nom?:string, conti?:string, pobla?:number, capi?:string, bande?:string){
        this.nombre=nom;
        this.continente=conti;
        this.poblacion=pobla;
        this.capital=capi;
        this.bandera=bande;
    }
}