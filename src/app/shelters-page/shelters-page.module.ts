import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SheltersPageRoutingModule } from './shelters-page-routing.module';
import { SheltersPageComponent } from './shelters-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { CardsModule } from '../cards/cards.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NewShelterDialogComponent } from './new-shelter-dialog/new-shelter-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [SheltersPageComponent, NewShelterDialogComponent],
  imports: [
    CommonModule,
    SheltersPageRoutingModule,
    FormsModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    CardsModule,
    MatButtonToggleModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
  ],
})
export class SheltersPageModule { }
