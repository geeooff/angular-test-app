import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [RouterLink, NgbCollapse]
})
export class NavComponent {
  public appTitle: string;
  public isCollapsed = true;

  constructor() {
    this.appTitle = 'My supper application';
  }
}
