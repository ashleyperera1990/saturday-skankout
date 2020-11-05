import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './components/basket/basket.component';
import {SharedModule} from '../shared/shared.module';
import {CheckoutRoutingModule} from './checkout.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { BillingDetailsFormComponent } from './components/billing-details-form/billing-details-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BraintreeComponent } from './components/braintree/braintree.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
    declarations: [
        BasketComponent,
        CheckoutPageComponent,
        BillingDetailsFormComponent,
        BraintreeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule,
        CheckoutRoutingModule,
        HttpClientModule,
        NgbModule
    ]
})
export class CheckoutModule {
}
