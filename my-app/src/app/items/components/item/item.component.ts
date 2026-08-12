import { Component, Input, inject } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';
import { NgIf } from '@angular/common';
import { StateDirective } from '../../../shared/directives/state.directive';
import { RouterLink } from '@angular/router';
import { SuperPipe } from '../../../shared/pipes/super.pipe';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    imports: [NgIf, StateDirective, RouterLink, SuperPipe]
})
export class ItemComponent  {
  private collectionService = inject(CollectionService);

  @Input() item?: Item;
  public state = State;

  public changeState(newState: State): void {
    if (!this.item) {
      return;
    }
    this.item.state = newState;
    this.collectionService.updateItem(this.item).subscribe(
      (data) => {
        console.log('updateItem', data);
        if (data) {
          this.item = data;
        }
      }
    );
  }
}
