import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShelterAnimalDetailPageComponent } from './shelter-animal-detail-page.component';

const routes: Routes = [{ path: '', component: ShelterAnimalDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelterAnimalDetailPageRoutingModule { }
