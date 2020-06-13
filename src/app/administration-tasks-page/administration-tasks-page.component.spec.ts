import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationTasksPageComponent } from './administration-tasks-page.component';

describe('AdministrationTasksPageComponent', () => {
  let component: AdministrationTasksPageComponent;
  let fixture: ComponentFixture<AdministrationTasksPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationTasksPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationTasksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
