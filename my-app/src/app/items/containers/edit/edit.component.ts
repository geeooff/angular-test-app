import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection.service';
import { Item } from '../../../shared/interfaces/item';

@Component({
    selector: 'app-edit',
    templateUrl: './edit.component.html',
    styleUrls: ['./edit.component.css'],
    standalone: false
})
export class EditComponent implements OnInit {
  public item?: Item;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private collectionService: CollectionService
  ) { }

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
