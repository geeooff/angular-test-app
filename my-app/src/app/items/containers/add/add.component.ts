import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../../shared/enums/state.enum';
import { Item, NewItem } from '../../../shared/interfaces/item';

@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    standalone: false
})
export class AddComponent {
  public intitules = Object.values(State);
  public newItem: NewItem;
  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) {
    this.newItem = this.init();
  }

  private init(): NewItem {
    return {
      name: '',
      reference: '',
      state: State.ALIVRER
    };
  }

  public process(): void {
    console.log(this.newItem);
    const sub = this.collectionService.addItem(this.newItem).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.newItem = this.init();
          this.router.navigate(['/items']);
        }
      }
    );
  }
}
