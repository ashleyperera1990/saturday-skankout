import {BasketItem} from './basket-item.model';

export class Basket {
    basketItems: BasketItem[];
    total: number;


    constructor() {
        this.basketItems = [];
        this.total = 0;
    }
}
