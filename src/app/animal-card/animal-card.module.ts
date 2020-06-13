import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from './animal-card.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AnimalCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
  ],
  exports: [
    AnimalCardComponent,
  ],
})
export class AnimalCardModule {
}
