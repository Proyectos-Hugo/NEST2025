import { IsInt, IsString, Length, Max, Min } from "class-validator";

export class ProductosAltaDtos{
    @IsString()
    @Length(50)
    producto:string;
    @IsInt()
    @Min(1)
    @Max(99)
    unidades:number;
    @IsInt()
    @Min(1)
    @Max(99)
    disponibilidad:number;

    constructor(pro?:string,uni?:number,disp?:number){
        this.producto=pro;
        this.unidades=uni;
        this.disponibilidad=disp;
    }
}