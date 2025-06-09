import { IsInt, IsString, Length, Max, Min } from "class-validator";

export class PedidosAltaDtos{
    @IsString()
    @Length(50)
    producto:string;
    @IsInt()
    @Min(0)
    @Max(99)
    unidades:number;

    constructor(pro?:string,uni?:number){
        this.producto=pro;
        this.unidades=uni;
    }
}