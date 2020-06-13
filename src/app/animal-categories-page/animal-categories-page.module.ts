import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimalCategoriesPageRoutingModule } from './animal-categories-page-routing.module';
import { AnimalCategoriesPageComponent } from './animal-categories-page.component';


@NgModule({
  declarations: [AnimalCategoriesPageComponent],
  imports: [
    CommonModule,
    AnimalCategoriesPageRoutingModule
  ]
})
export class AnimalCategoriesPageModule { }
