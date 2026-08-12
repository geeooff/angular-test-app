import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    standalone: false
})
export class NavComponent {
  public appTitle: string;
  public isCollapsed = true;

  constructor() {
    this.appTitle = 'My supper application';
  }
}
