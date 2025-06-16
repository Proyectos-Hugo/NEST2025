import { Injectable } from '@nestjs/common';
import axios, { Axios } from 'axios';
import { Pais } from 'src/model/Pais';

@Injectable()
export class PaisesService {

  urlGlobal:string= 'https://restcountries.com/v2/all?fields=name,region,flag,population,capital';
  
  async findByContinente(continente:string):Promise<Pais[]>{
    const response= await axios.get(this.urlGlobal);
    const pais:Pais[] = response.data.filter(p=>p.region === continente)
    .map(p=> new Pais(p.name,p.region,p.population,p.capital,p.flag));
    return pais;
  } 

  async findAllContinentes():Promise<string[]>{
    const response= await axios.get(this.urlGlobal);
    const regions:string = response.data
    .map(p=>p.region);
    return [...new Set(regions)];
  }

  async findPoblacionMax():Promise<Pais>{
    const response= await axios.get(this.urlGlobal);
    const pais:Pais[] = response.data
    .map(p=> new Pais(p.name,p.region,p.population,p.capital,p.flag));
    return pais.reduce((aux,actual)=>{
      if(actual.poblacion>aux.poblacion){
        aux=actual;
      }
      return aux;
    });
  }
}
