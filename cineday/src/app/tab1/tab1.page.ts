import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../types';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  itemList: Observable<Item[]>;

  constructor(itemService: ItemService) {
    this.itemList = itemService.getItems();
  }
}
