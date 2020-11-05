import {Injectable} from '@angular/core';
import {PRODUCT_STOCK} from '../../data/product-stock.data';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductStockService {

    constructor() {
    }

    getStockByProductId(id: number) {
        return of(PRODUCT_STOCK.filter(stock => stock.productId === id));
    }
}
