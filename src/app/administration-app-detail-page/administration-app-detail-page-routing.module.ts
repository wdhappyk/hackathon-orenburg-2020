import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationAppDetailPageComponent } from './administration-app-detail-page.component';

const routes: Routes = [{ path: '', component: AdministrationAppDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationAppDetailPageRoutingModule { }
