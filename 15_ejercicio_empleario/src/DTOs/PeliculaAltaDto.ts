import { IsInt, IsNumber, IsString, Length } from 'class-validator';

export class PeliculaAltaDto {
  @IsInt()
  id_peli:number;
  @IsString()
  titulo:string;
  @IsString()
  @Length(500)
  descripcion:string;
  @IsNumber()
  duracion:number;

  constructor(id?:number,tit?:string,des?:string,dur?:number){
      this.id_peli=id;
      this.titulo=tit;
      this.descripcion=des;
      this.duracion=dur;
  }
}
