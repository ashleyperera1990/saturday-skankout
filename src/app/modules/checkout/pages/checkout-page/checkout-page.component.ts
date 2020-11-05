import {Component, OnInit, ViewChild} from '@angular/core';
import {Basket} from '../../../../models/basket.model';
import {BasketService} from '../../../../services/basket.service';
import {BasketItem} from '../../../../models/basket-item.model';
import {NgbNav, NgbTabset} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  basket: Basket;
  @ViewChild('tabs') tabs: NgbNav;

  detailsValid = false;
  billingDetailsForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    address: new FormGroup({
      line1: new FormControl('', Validators.required),
      line2: new FormControl('', Validators.required),
      line3: new FormControl(''),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      postcode: new FormControl('', Validators.required)
    })
  });

  constructor(private basketService: BasketService,
              private router: Router) {
    this.basketService.basketUpdateEvent.subscribe(res => this.basket = res);
  }

  ngOnInit(): void {
    this.basket = this.basketService.getBasket()
  }

  removeItemFromBasket(basketItem: BasketItem) {
    this.basketService.removeProductFromBasket(basketItem);
  }

  continue() {
    if (this.tabs.activeId === 'basket') {
      this.tabs.activeId = 'details';
    } else if (this.tabs.activeId === 'details') {
      this.tabs.activeId = 'payment'
    }
  }

  goBack() {
    if (this.tabs.activeId === 'basket') {
      this.router.navigateByUrl('/store')
    } else if (this.tabs.activeId === 'details') {
      this.tabs.activeId = 'basket';
    } else if (this.tabs.activeId === 'payment') {
      this.tabs.activeId = 'details';
    }
  }

  isContinueDisabled(activeId: string) {
    if (activeId === 'basket') {
      return this.basket.basketItems.length === 0;
    } else if (activeId === 'details') {
      return !this.billingDetailsForm.valid;
    }
  }

  isDetailsValid() {

  }
}
