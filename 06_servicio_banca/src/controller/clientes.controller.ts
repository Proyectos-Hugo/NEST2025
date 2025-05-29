import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ClienteService } from 'src/service/clientes.service';


@Controller('cliente')
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Get('clientes')
  bucarCuentaCli(@Query("dni")dni:number){
    return this.clienteService.finDni(dni);
  }
}