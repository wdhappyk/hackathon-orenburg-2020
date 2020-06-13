import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapPageComponent } from './map-page.component';

const routes: Routes = [{ path: '', component: MapPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapPageRoutingModule { }
