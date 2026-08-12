import { Component, OnInit, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { CollectionService } from '../../../core/services/collection.service';
import { State } from '../../../shared/enums/state.enum';
import { Item, NewItem } from '../../../shared/interfaces/item';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-add',
    templateUrl: './add.component.html',
    styleUrls: ['./add.component.css'],
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [FormsModule]
})
export class AddComponent {
  private router = inject(Router);
  private collectionService = inject(CollectionService);

  public intitules = Object.values(State);
  public newItem: NewItem;
  constructor() {
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
