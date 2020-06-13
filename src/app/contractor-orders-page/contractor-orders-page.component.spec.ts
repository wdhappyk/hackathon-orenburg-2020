import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorOrdersPageComponent } from './contractor-orders-page.component';

describe('ContractorOrdersPageComponent', () => {
  let component: ContractorOrdersPageComponent;
  let fixture: ComponentFixture<ContractorOrdersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorOrdersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
