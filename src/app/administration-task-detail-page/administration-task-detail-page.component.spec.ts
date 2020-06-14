import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationTaskDetailPageComponent } from './administration-task-detail-page.component';

describe('AdministrationTaskDetailPageComponent', () => {
  let component: AdministrationTaskDetailPageComponent;
  let fixture: ComponentFixture<AdministrationTaskDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationTaskDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationTaskDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
