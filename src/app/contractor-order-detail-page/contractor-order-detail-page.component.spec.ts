import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorOrderDetailPageComponent } from './contractor-order-detail-page.component';

describe('ContractorOrderDetailPageComponent', () => {
  let component: ContractorOrderDetailPageComponent;
  let fixture: ComponentFixture<ContractorOrderDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorOrderDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorOrderDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
