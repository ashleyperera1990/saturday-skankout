import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-billing-details-form',
  templateUrl: './billing-details-form.component.html',
  styleUrls: ['./billing-details-form.component.css']
})
export class BillingDetailsFormComponent implements OnInit {

  @Input() billingForm;
  @Output() billingFormChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }


  onUpdate() {
    this.billingFormChange.emit(this.billingForm);
  }

}
