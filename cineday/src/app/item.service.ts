import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from './types';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient: HttpClient) { }
  getItem(itemId: string): Observable<Item> {
    return this.httpClient.get<Item>(API + '/' + itemId);
  }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(API);
  }
}

// const API = "http://localhost:3000/cineday";
const API = 'https://my-json-server.typicode.com/Fleax1/cineday/cinema';
