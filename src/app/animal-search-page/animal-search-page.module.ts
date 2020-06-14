import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalSearchPageRoutingModule } from './animal-search-page-routing.module';
import { AnimalSearchPageComponent } from './animal-search-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { AnimalCardModule } from '../animal-card/animal-card.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatNativeDateModule } from '@angular/material/core';
import { AnimalDialogComponent } from './animal-dialog/animal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [AnimalSearchPageComponent, AnimalDialogComponent],
  imports: [
    CommonModule,
    AnimalSearchPageRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    AnimalCardModule,
    MatGridListModule,
    MatNativeDateModule,
    MatDialogModule,
  ],
})
export class AnimalSearchPageModule {
}
