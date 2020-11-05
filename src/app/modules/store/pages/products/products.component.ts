import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';
import {BasketService} from '../../../../services/basket.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[];

  constructor(private productService: ProductService,
              private basketService: BasketService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts() {
    this.productService.getAllProducts().subscribe(res => {
      this.products = res;
    })
  }

}
