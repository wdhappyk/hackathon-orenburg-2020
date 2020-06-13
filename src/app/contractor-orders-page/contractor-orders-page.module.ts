import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractorOrdersPageRoutingModule } from './contractor-orders-page-routing.module';
import { ContractorOrdersPageComponent } from './contractor-orders-page.component';


@NgModule({
  declarations: [ContractorOrdersPageComponent],
  imports: [
    CommonModule,
    ContractorOrdersPageRoutingModule
  ]
})
export class ContractorOrdersPageModule { }
