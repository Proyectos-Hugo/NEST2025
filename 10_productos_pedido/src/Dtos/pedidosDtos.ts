export class PedidosDtos{
    producto:string;
    unidades:number;
    total:number;
    fechaPedido:Date;


    constructor(producto?:string, uni?:number, tot?:number, fecha?:Date){
        this.producto=producto;
        this.unidades=uni;
        this.total=tot;
        this.fechaPedido=fecha;
    }
}