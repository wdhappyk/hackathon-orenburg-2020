import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalActionCardComponent } from './animal-action-card.component';

describe('AnimalActionCardComponent', () => {
  let component: AnimalActionCardComponent;
  let fixture: ComponentFixture<AnimalActionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalActionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
