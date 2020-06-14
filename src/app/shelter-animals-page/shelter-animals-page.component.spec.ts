import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterAnimalsPageComponent } from './shelter-animals-page.component';

describe('ShelterAnimalsPageComponent', () => {
  let component: ShelterAnimalsPageComponent;
  let fixture: ComponentFixture<ShelterAnimalsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterAnimalsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterAnimalsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
