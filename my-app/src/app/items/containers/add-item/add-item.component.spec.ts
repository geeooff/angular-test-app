import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NEVER } from 'rxjs';

import { CollectionService } from 'src/app/core/services/collection.service';
import { AddItemComponent } from './add-item.component';

describe('AddItemComponent', () => {
  let component: AddItemComponent;
  let fixture: ComponentFixture<AddItemComponent>;
  let collectionServiceStub: Partial<CollectionService>;

  beforeEach(async () => {
    collectionServiceStub = {
      collection: NEVER
    };
    TestBed.configureTestingModule({
    imports: [AddItemComponent],
    providers: [
        {
            provide: CollectionService,
            useValue: collectionServiceStub
        }
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
