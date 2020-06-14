import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContractorOrderDetailPageComponent } from './contractor-order-detail-page.component';

const routes: Routes = [{ path: '', component: ContractorOrderDetailPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractorOrderDetailPageRoutingModule { }
