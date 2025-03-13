import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../interfaces/item';

@Pipe({
    name: 'filter',
    standalone: false
})
export class FilterPipe implements PipeTransform {

  transform(coll: Item[] | null, arg: string): Item[] {
    if (!coll) {
      return [];
    }
    const searchTerm = arg.trim().toLowerCase();
    console.log(coll, searchTerm);
    return searchTerm
      ? coll.filter(item => item.name.toLowerCase().indexOf(searchTerm) !== -1)
      : coll;
  }

}
