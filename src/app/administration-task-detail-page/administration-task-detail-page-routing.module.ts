import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationTaskDetailPageComponent } from './administration-task-detail-page.component';

const routes: Routes = [{ path: '', component: AdministrationTaskDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationTaskDetailPageRoutingModule { }
