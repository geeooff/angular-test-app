import { TestBed, inject } from '@angular/core/testing';
import { provideHttpClientTesting } from '@angular/common/http/testing';

import { CollectionService } from './collection.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('CollectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [CollectionService, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
  });

  it('should be created', inject([CollectionService], (service: CollectionService) => {
    expect(service).toBeTruthy();
  }));
});
