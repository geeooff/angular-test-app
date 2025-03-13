import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css'],
    standalone: false
})
export class AddItemComponent {
  public item?: Item;
  constructor(
    private router: Router,
    private collectionService: CollectionService
  ) {

  }

  public add(item: Item): void {
    const sub = this.collectionService.addItem(item).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.router.navigate(['/items']);
        }
      }
    );
  }
}
