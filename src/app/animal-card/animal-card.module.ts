import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalCardComponent } from './animal-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AnimalCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [
    AnimalCardComponent,
  ],
})
export class AnimalCardModule {
}
