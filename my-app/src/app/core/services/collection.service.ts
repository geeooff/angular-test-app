import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item, NewItem } from '../../shared/interfaces/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private http = inject(HttpClient);

  private _collection: Observable<Item[]>;
  private url = 'api/COLLECTION';
  constructor() {
    this._collection = this.http.get<Item[]>(this.url);
  }

  /**
   * get collection
   */
  public get collection(): Observable<Item[]> {
    return this._collection;
  }

  /**
   * set collection
   */
  public set collection(col: Observable<Item[]>) {
    this._collection = col;
  }

  /**
   * add item in collection
   */
  public addItem(item: NewItem): Observable<Item> {
    return this.http.post<Item>(this.url, item);
  }

  /**
   * get item from collection
   */
  public getItemById(id: number): Observable<Item | undefined> {
    return this.http.get<Item | undefined>(`${this.url}/${id}`);
  }

  /**
   * update item in collection
   */
  public updateItem(item: Item): Observable<Item> {
    return this.http.put<Item>(this.url, item);
  }

  /**
   * delete item in collection
   */
}
