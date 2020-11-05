import {Injectable} from '@angular/core';
import {PRODUCTS} from '../../data/products.data';
import {of} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ProductService {

    getAllProducts() {
        return of(PRODUCTS);
    }

    getProductById(id: number) {
        return of(PRODUCTS.find(res => res.id === id));
    }
}
