import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorOrderDetailPageRoutingModule } from './contractor-order-detail-page-routing.module';
import { ContractorOrderDetailPageComponent } from './contractor-order-detail-page.component';


@NgModule({
  declarations: [ContractorOrderDetailPageComponent],
  imports: [
    CommonModule,
    ContractorOrderDetailPageRoutingModule
  ]
})
export class ContractorOrderDetailPageModule { }
