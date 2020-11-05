import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Basket} from '../../../../models/basket.model';
import {BasketService} from '../../../../services/basket.service';
import {BasketItem} from '../../../../models/basket-item.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Input() basket: Basket;
  @Output() itemRemoved = new EventEmitter();


  ngOnInit(): void {
  }

  removeItemFromBasket(item: BasketItem) {
    this.itemRemoved.emit(item);
  }
}
