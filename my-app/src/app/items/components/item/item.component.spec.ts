import { Pipe, PipeTransform } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NEVER } from 'rxjs';
import { CollectionService } from 'src/app/core/services/collection.service';
import { State } from 'src/app/shared/enums/state.enum';
import { ItemComponent } from './item.component';

@Pipe({ name: 'super' })
class SuperPipeMock implements PipeTransform {
  transform(value: any): any {
    return value;
  }
}

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  let collectionServiceStub: Partial<CollectionService>;

  beforeEach(async () => {
    collectionServiceStub = {
      collection: NEVER
    };
    await TestBed.configureTestingModule({
    imports: [ItemComponent,
        SuperPipeMock],
    providers: [
        provideRouter([]),
        {
            provide: CollectionService,
            useValue: collectionServiceStub
        }
    ]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    component.item = {
      id: 99,
      name: 'Problems',
      reference: 'Ice-T',
      state: State.ALIVRER
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
