import { IsInt, IsNumber, IsString, Length } from "class-validator";

export class ProductosDtos{
    codigoProducto:number;
    producto:string;
    precioUnitario:number;
    stock:number;

    constructor(codPro?:number, pro?:string, preUni?:number, stock?:number){
        this.codigoProducto=codPro;
        this.producto=pro;
        this.precioUnitario=preUni;
        this.stock=stock;
    }
}