import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalActionCardComponent } from './animal-action-card/animal-action-card.component';


@NgModule({
  declarations: [AnimalActionCardComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    AnimalActionCardComponent,
  ],
})
export class CardsModule {
}
