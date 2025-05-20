import { Injectable } from '@nestjs/common';
import { Item } from 'src/model/Item';

@Injectable()
export class BuscadorService {
  repositorio:Item[]= [new Item("http://www.fnac.com","libros de todo tipo"),
    new Item("http://www.game.com","varios tipos de juegos"),
    new Item("http://wwwcasadelibros.com","libros de todos los idiomas"),
    new Item("http://www.mytravel.com","viajes por todo el mundo")
  ];

  buscar(tematica:string):Item[]{
    return this.repositorio.filter((item:Item) => item.tematica === tematica);
  }

  alta(item:Item):void{
    this.repositorio.push(item);
  }
  }
