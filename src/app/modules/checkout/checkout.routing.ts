import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './components/basket/basket.component';
import {CheckoutPageComponent} from './pages/checkout-page/checkout-page.component';

const routes: Routes = [
    { path: '', component: CheckoutPageComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
    ],
})
export class CheckoutRoutingModule { }

