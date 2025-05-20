import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

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
}
