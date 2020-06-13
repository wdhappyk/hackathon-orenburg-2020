import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalSearchPageComponent } from './animal-search-page.component';

describe('AnimalSearchPageComponent', () => {
  let component: AnimalSearchPageComponent;
  let fixture: ComponentFixture<AnimalSearchPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalSearchPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
