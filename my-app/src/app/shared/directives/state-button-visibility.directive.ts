import { Directive } from '@angular/core';

@Directive({
    selector: '[appStateButtonVisibility]',
    standalone: false
})
export class StateButtonVisibilityDirective {
  // @Input() appStateButtonVisibility: State;
  // @HostBinding('class') nomClass: string;
  constructor() { }

}
