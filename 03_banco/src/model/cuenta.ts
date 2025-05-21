export class Cuenta {
    numeroCuenta: string; 
    saldo: number;
    titular: string;
    tipo:string;   
    constructor(num?:string, sal?:number,tit?:string, tip?:string){
        this.numeroCuenta=num;
        this.saldo=sal;
        this.titular=tit;
        this.tipo=tip;
    }
}