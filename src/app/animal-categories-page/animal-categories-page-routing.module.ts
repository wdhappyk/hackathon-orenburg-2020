import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalCategoriesPageComponent } from './animal-categories-page.component';

const routes: Routes = [{ path: '', component: AnimalCategoriesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimalCategoriesPageRoutingModule { }
