import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnimalSearchPageComponent } from './animal-search-page.component';

const routes: Routes = [
  { path: '', component: AnimalSearchPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnimalSearchPageRoutingModule {
}
