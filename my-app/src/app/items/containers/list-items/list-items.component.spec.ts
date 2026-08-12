import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NEVER } from 'rxjs';
import { CollectionService } from '../../../core/services/collection.service';
import { FilterPipe } from '../../../shared/pipes/filter.pipe';
import { ListItemsComponent } from './list-items.component';

@Pipe({ name: 'filter' })
class FilterPipeMock implements PipeTransform {
  transform<T>(value: T): T {
    return value;
  }
}

describe('ListItemsComponent', () => {
  let component: ListItemsComponent;
  let fixture: ComponentFixture<ListItemsComponent>;
  let collectionServiceStub: Partial<CollectionService>;
  let filterPipeStub: Partial<FilterPipe>;

  beforeEach(async () => {
    collectionServiceStub = {
      collection: NEVER
    };
    filterPipeStub = {
      transform: (coll) => coll ?? []
    };

    TestBed.configureTestingModule({
    imports: [ListItemsComponent,
        FilterPipeMock],
    providers: [
        {
            provide: CollectionService,
            useValue: collectionServiceStub
        },
        {
            provide: FilterPipe,
            useValue: filterPipeStub
        }
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
