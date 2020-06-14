import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterAnimalDetailPageComponent } from './shelter-animal-detail-page.component';

describe('ShelterAnimalDetailPageComponent', () => {
  let component: ShelterAnimalDetailPageComponent;
  let fixture: ComponentFixture<ShelterAnimalDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterAnimalDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterAnimalDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
