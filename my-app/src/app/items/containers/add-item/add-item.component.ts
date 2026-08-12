import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../../../shared/interfaces/item';
import { CollectionService } from '../../../core/services/collection.service';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
    selector: 'app-add-item',
    templateUrl: './add-item.component.html',
    styleUrls: ['./add-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [FormComponent]
})
export class AddItemComponent {
  private router = inject(Router);
  private collectionService = inject(CollectionService);

  public item?: Item;

  public add(item: Item): void {
    this.collectionService.addItem(item).subscribe(
      (data) => {
        console.log(data);
        if (data) {
          this.router.navigate(['/items']);
        }
      }
    );
  }
}
