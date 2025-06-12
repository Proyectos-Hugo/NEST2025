import { Usuario } from './../model/usuario';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario) private readonly repositoryUsuarios: Repository<Usuario>
  ) {}

  async findByUserName(username:string):Promise<any>{
    return this.repositoryUsuarios.findOneBy({username:username});
  }

}