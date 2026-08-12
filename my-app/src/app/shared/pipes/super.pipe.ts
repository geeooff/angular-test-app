import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../enums/state.enum';

@Pipe({
    name: 'super',
    standalone: false
})
export class SuperPipe implements PipeTransform {

  transform(reference: string, state: State): any {
    let prefix: string;

    // NOTE (GV) static prefix
    // switch (state) {
    //   case State.ALIVRER:
    //     prefix = 'AL';
    //     break;
    //   case State.ENCOURS:
    //     prefix = 'EN';
    //     break;
    //   case State.LIVREE:
    //     prefix = 'LI';
    //     break;
    //   default:
    //     prefix = '??';
    //     break;
    // }

    // NOTE (GV) dynamic prefix
    prefix = state
      .toUpperCase()
      .replace(' ', '')
      .substr(0, 2);

    return `${prefix}-${reference}`;
  }

}
