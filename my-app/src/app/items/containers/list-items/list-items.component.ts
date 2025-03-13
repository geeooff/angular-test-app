import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-list-items',
    templateUrl: './list-items.component.html',
    styleUrls: ['./list-items.component.css'],
    standalone: false
})
export class ListItemsComponent {
  public collection: Observable<Item[]>;

  constructor(
    private collectionService: CollectionService
  ) {
    this.collection = this.collectionService.collection;
  }
}
