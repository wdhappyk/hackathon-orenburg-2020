import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationAppsPageComponent } from './administration-apps-page.component';

describe('AdministrationAppsPageComponent', () => {
  let component: AdministrationAppsPageComponent;
  let fixture: ComponentFixture<AdministrationAppsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationAppsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationAppsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
