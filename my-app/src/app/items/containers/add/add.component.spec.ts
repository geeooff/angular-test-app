import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NEVER } from 'rxjs';
import { CollectionService } from '../../../core/services/collection.service';

import { AddComponent } from './add.component';

describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;
  let collectionServiceStub: Partial<CollectionService>;

  beforeEach(async () => {
    collectionServiceStub = {
      collection: NEVER
    };
    await TestBed.configureTestingModule({
    imports: [
        FormsModule,
        AddComponent
    ],
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
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
