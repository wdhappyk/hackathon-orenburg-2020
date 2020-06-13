import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationTasksPageComponent } from './administration-tasks-page.component';

const routes: Routes = [{ path: '', component: AdministrationTasksPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationTasksPageRoutingModule { }
