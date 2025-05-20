import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Ficha } from './Model/ficha';

@Controller("saludos")
export class AppController {
  constructor(private appService: AppService) {}

  @Get("general")
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("personal/:name")
  getHelloPersonalizado(@Param("name")nombre:string):string{
    return this.appService.getHello()+ " "+nombre;
  }

  @Get('person')
  getHelloComplete(@Query("name")nombre:string, @Query("age") edad:number):string{
    return this.appService.getHello()+ " Hola "+nombre+ " tienes "+edad+ " años";
  }

  @Get('ficha')
  getFicha(@Query("name")nombre:string,@Query("age")edad:number, @Query("email")email:string):Ficha{
    return new Ficha(nombre,edad,email);
  }

  @Post('altaficha')
  postFicha(@Body()ficha:Ficha){
    console.log(ficha);
  }
}
