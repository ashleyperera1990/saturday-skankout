import {EventEmitter, Injectable} from '@angular/core';
import {StorageService} from './storage.service';
import {Product} from '../models/product.model';
import {BasketItem} from '../models/basket-item.model';
import {Basket} from '../models/basket.model';
import {ProductStock} from '../models/product-stock.model';

@Injectable({providedIn: 'root'})
export class BasketService {

    basket: Basket;
    basketUpdateEvent = new EventEmitter();

    constructor(private storageService: StorageService) {
        if (this.storageService.getItem('BASKET')) {
            this.basket = Object.assign({}, this.storageService.getItem('BASKET'));
        } else {
            this.basket = new Basket();
        }
    }

    getBasket() {
        return this.basket;
    }

    addProductToBasket(product: Product, stock: ProductStock) {
        let basketItem;
        if (this.basket.basketItems.length === 0 || !this.getProductInBasketForSize(product, stock.size)) {
            basketItem = new BasketItem();
            basketItem.product = product;
            basketItem.size = stock.size;
            basketItem.quantity = 1;
            this.basket.basketItems.push(basketItem);
        } else {
            basketItem = this.getProductInBasketForSize(product, stock.size);
            basketItem.quantity++;
        }
        this.updateAndBroadcast();
    }

    removeProductFromBasket(basketItem: BasketItem) {
        const index = this.basket.basketItems.indexOf(basketItem);
        const itemToUpdate = this.basket.basketItems[index];
        if (index >= 0) {
            if (itemToUpdate.quantity > 1) {
                itemToUpdate.quantity--;
            } else {
                this.basket.basketItems.splice(index, 1);
            }
            this.updateAndBroadcast();
        }
    }

    updateAndBroadcast() {
        this.updateBasketTotal();
        this.broadcastBasketUpdate();
        this.setBasketInStorge();
    }

    updateBasketTotal() {
        let total = 0;
        for (const item of this.basket.basketItems) {
            total += (item.product.price * item.quantity);
        }
        this.basket.total = total;
    }

    broadcastBasketUpdate() {
        this.basketUpdateEvent.emit(this.basket);
    }

    getProductInBasketForSize(product: Product, size: any) {
        return this.basket.basketItems.find(res => res.product.id === product.id && res.size === size);
    }

    setBasketInStorge() {
        this.storageService.setItem('BASKET', this.basket);
    }

}
