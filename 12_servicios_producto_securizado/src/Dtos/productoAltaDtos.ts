import { IsInt, IsNumber, IsString, Length, Max, Min } from 'class-validator'
export class ProductoAltaDtos{
    @IsInt()
    codigoProducto:number;
    @IsString()
    @Length(50)
    producto:string;
    @IsNumber()
    precioUnitario:number;  
    @IsInt()
    @Min(0)
    @Max(99)
    stock:number;

    constructor(codPro?:number, pro?:string, preUni?:number, sto?:number){
        this.codigoProducto=codPro;
        this.producto=pro;
        this.precioUnitario=preUni;
        this.stock=sto;
    }
}

