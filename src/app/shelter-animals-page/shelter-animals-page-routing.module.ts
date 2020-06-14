import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShelterAnimalsPageComponent } from './shelter-animals-page.component';

const routes: Routes = [{ path: '', component: ShelterAnimalsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShelterAnimalsPageRoutingModule { }
