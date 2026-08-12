import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';
import { FormComponent } from '../../../shared/components/form/form.component';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    imports: [FormComponent]
})
export class EditComponent implements OnInit {
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private collectionService = inject(CollectionService);

  public item?: Item;

  ngOnInit() {
    this.activatedRoute.data.subscribe(
      (data) => {
        console.log(data);
        this.item = data['item'];
      }
    );
  }

  public update(item: Item) {
    this.collectionService.updateItem(item).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/items']);
      }
    );
  }
}
