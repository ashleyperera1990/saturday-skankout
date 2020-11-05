import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreRoutingModule} from './store.routing';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import {RouterModule} from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import {SharedModule} from '../shared/shared.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';


@NgModule({
    declarations: [ProductDetailComponent, ProductsComponent],
    imports: [
        CommonModule,
        StoreRoutingModule,
        RouterModule,
        SharedModule,
        NgbModule,
        FormsModule
    ]
})
export class StoreModule {
}
