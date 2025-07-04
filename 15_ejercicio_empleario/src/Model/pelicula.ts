export class Pelicula{
    id_peli:number;
    titulo:string;
    descripcion:string;
    duracion:number;

    constructor(id?:number,tit?:string,des?:string,dur?:number){
        this.id_peli=id;
        this.titulo=tit;
        this.descripcion=des;
        this.duracion=dur;
    }
}