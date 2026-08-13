import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Item } from '../../shared/interfaces/item';
import { CollectionService } from './collection.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailResolverService  {
  private router = inject(Router);
  private collectionService = inject(CollectionService);


  resolve(route: ActivatedRouteSnapshot): Observable<Item | undefined> {
    const idValue = route.paramMap.get('id');

    if (idValue === null) {
      this.router.navigate(['/items']);
      return of(undefined);
    }

    const id = parseInt(idValue, 10);

    if (isNaN(id)) {
      this.router.navigate(['/items']);
      return of(undefined);
    }

    return this.collectionService.getItemById(id).pipe(
      tap((data) => {
        console.log(data);
        if (!data) {
          this.router.navigate(['/items']);
          return undefined;
        } else {
          return data;
        }
      })
    );
  }
}
