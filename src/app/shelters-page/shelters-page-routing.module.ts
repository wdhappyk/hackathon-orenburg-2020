import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SheltersPageComponent } from './shelters-page.component';

const routes: Routes = [{ path: '', component: SheltersPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SheltersPageRoutingModule { }
