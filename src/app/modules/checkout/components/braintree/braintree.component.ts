import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare var braintree: any;

@Component({
    selector: 'app-braintree',
    templateUrl: './braintree.component.html',
    styleUrls: ['./braintree.component.css']
})
export class BraintreeComponent implements OnInit {

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        this.http.get('/api/braintree/token').subscribe((res: any) => {
            const button = document.querySelector('#submit-button');

            braintree.dropin.create({
                authorization: res.token,
                selector: '#braintree-dropin',
            }).then(function (clientInstance) {
                button.addEventListener('click', function () {
                    clientInstance.requestPaymentMethod(function (requestPaymentMethodErr, payload) {
                        console.log(payload);
                        // Submit payload.nonce to your server
                    });
                });
            })
        })
    }

}
