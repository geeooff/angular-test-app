import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-state-button',
    templateUrl: './state-button.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./state-button.component.css']
})
export class StateButtonComponent {

  constructor() { }

}
