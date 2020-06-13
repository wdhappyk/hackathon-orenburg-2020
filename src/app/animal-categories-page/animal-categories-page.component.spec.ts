import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCategoriesPageComponent } from './animal-categories-page.component';

describe('AnimalCategoriesPageComponent', () => {
  let component: AnimalCategoriesPageComponent;
  let fixture: ComponentFixture<AnimalCategoriesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCategoriesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCategoriesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
