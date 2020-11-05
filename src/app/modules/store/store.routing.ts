import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductDetailComponent} from './pages/product-detail/product-detail.component';
import {ProductsComponent} from './pages/products/products.component';

const routes: Routes = [
    { path: '', component: ProductsComponent},
    { path: 'products/:id', component: ProductDetailComponent},
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
})
export class StoreRoutingModule { }
