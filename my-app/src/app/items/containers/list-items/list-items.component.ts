import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { ItemComponent } from '../../components/item/item.component';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';

@Component({
    selector: 'app-list-items',
    templateUrl: './list-items.component.html',
    styleUrls: ['./list-items.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ItemComponent, AsyncPipe, FilterPipe]
})
export class ListItemsComponent {
  private collectionService = inject(CollectionService);

  public collection: Observable<Item[]>;

  constructor() {
    this.collection = this.collectionService.collection;
  }
}
