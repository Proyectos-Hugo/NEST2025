import { Injectable } from '@nestjs/common';
import { Item } from 'src/model/Item';

@Injectable()
export class BuscadorService {
  repositorio:Item[]= [];
}
