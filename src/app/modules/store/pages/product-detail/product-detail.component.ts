import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from '../../../../services/product.service';
import {Product} from '../../../../models/product.model';
import {ProductStockService} from '../../../../services/product-stock.service';
import {BasketService} from '../../../../services/basket.service';
import {BasketItem} from '../../../../models/basket-item.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  productStock: any;

  selectedImage;
  selectedSize;

  constructor(private route: ActivatedRoute,
              private basketService: BasketService,
              private productService: ProductService,
              private productStockService: ProductStockService) { }

  ngOnInit(): void {
    this.route.params.subscribe(res => {
      this.getProductById(parseInt(res.id, 0))
    })
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(prod => {
      this.product = prod;
      this.selectedImage = this.product.images.find(img => img.primary === true);
      this.getProductStock(id);
    })
  }

  removeItemFromBasket(basketItem: BasketItem) {
    this.basketService.removeProductFromBasket(basketItem);
  }

  getProductStock(id: number) {
    this.productStockService.getStockByProductId(id).subscribe(res => {
      this.productStock = res;
    });
  }

  addProductToBasket() {
    this.basketService.addProductToBasket(this.product, this.selectedSize);
  }

  selectImage(id: number) {
    this.selectedImage = this.product.images.find(img => img.id === id);
  }
}
