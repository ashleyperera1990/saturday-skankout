import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingDetailsFormComponent } from './billing-details-form.component';

describe('BillingDetailsFormComponent', () => {
  let component: BillingDetailsFormComponent;
  let fixture: ComponentFixture<BillingDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
