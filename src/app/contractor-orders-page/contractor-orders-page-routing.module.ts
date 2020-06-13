import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorOrdersPageComponent } from './contractor-orders-page.component';

const routes: Routes = [{ path: '', component: ContractorOrdersPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorOrdersPageRoutingModule { }
