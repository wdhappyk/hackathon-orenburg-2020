import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShelterAnimalsPageRoutingModule } from './shelter-animals-page-routing.module';
import { ShelterAnimalsPageComponent } from './shelter-animals-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from '../cards/cards.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [ShelterAnimalsPageComponent],
  imports: [
    CommonModule,
    ShelterAnimalsPageRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDividerModule,
    MatIconModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    CardsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class ShelterAnimalsPageModule { }
