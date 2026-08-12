import { Component, Input } from '@angular/core';
import { Item } from '../../../shared/interfaces/item';
import { State } from '../../../shared/enums/state.enum';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    standalone: false
})
export class ItemComponent  {
  @Input() item?: Item;
  public state = State;
  constructor(
    private collectionService: CollectionService
  ) { }

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
