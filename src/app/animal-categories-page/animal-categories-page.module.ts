import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalCategoriesPageRoutingModule } from './animal-categories-page-routing.module';
import { AnimalCategoriesPageComponent } from './animal-categories-page.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoryCardModule } from '../category-card/category-card.module';


@NgModule({
  declarations: [AnimalCategoriesPageComponent],
  imports: [
    CommonModule,
    AnimalCategoriesPageRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    CategoryCardModule,
  ],
})
export class AnimalCategoriesPageModule { }
