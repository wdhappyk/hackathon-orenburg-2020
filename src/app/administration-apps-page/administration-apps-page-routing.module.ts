import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationAppsPageComponent } from './administration-apps-page.component';

const routes: Routes = [{ path: '', component: AdministrationAppsPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationAppsPageRoutingModule { }
