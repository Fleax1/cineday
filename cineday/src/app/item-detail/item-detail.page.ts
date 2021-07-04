import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Item} from '../types';
import {ItemService} from '../item.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {
  itemDetail: Observable<Item>;

  constructor(itemService: ItemService, activatedRoute: ActivatedRoute) {
    const ITEMID = activatedRoute.snapshot.params["itemId"];
    this.itemDetail = itemService.getItem(ITEMID);
  }

  ngOnInit() {
  }

}
