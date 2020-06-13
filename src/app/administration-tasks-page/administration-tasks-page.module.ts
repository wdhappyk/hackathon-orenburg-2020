import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministrationTasksPageRoutingModule } from './administration-tasks-page-routing.module';
import { AdministrationTasksPageComponent } from './administration-tasks-page.component';
import { CardsModule } from '../cards/cards.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [AdministrationTasksPageComponent],
  imports: [
    CommonModule,
    AdministrationTasksPageRoutingModule,
    CardsModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatCardModule,
    FormsModule,
  ],
})
export class AdministrationTasksPageModule { }
