import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NEVER } from 'rxjs';
import { CollectionService } from './collection.service';

import { ItemDetailResolverService } from './item-detail-resolver.service';

describe('ItemDetailResolverService', () => {
  let collectionServiceStub: Partial<CollectionService>;

  beforeEach(() => {
    collectionServiceStub = {
      getItemById: () => NEVER
    };

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        ItemDetailResolverService,
        {
          provide: CollectionService,
          useValue: collectionServiceStub
        }
      ]
    });
  });

  it('should be created', inject([ItemDetailResolverService], (service: ItemDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
