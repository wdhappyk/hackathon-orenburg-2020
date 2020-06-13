import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAppDetailPageComponent } from './administration-app-detail-page.component';

describe('AdministrationAppDetailPageComponent', () => {
  let component: AdministrationAppDetailPageComponent;
  let fixture: ComponentFixture<AdministrationAppDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationAppDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationAppDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
