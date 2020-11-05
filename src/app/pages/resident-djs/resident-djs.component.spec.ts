import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentDjsComponent } from './resident-djs.component';

describe('ResidentDjsComponent', () => {
  let component: ResidentDjsComponent;
  let fixture: ComponentFixture<ResidentDjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidentDjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentDjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
